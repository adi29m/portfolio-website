import { profile } from "@/data/portfolio";
import { createCalendar, parseContributions } from "@/lib/github-calendar";
import styles from "./portfolio.module.css";

const monthFormat = new Intl.DateTimeFormat("en", { month: "short", timeZone: "UTC" });
const dateFormat = new Intl.DateTimeFormat("en", { dateStyle: "long", timeZone: "UTC" });

export async function GitHubCalendar() {
  const response = await fetch(`https://github.com/users/${encodeURIComponent(profile.githubHandle)}/contributions`, {
    next: { revalidate: 3600 },
    signal: AbortSignal.timeout(15000),
    headers: { Accept: "text/html" },
  });
  if (!response.ok) throw new Error(`GitHub calendar returned ${response.status}`);
  const calendar = createCalendar(parseContributions(await response.text()));
  const width = calendar.weeks.length * 16 - 2;
  const months = calendar.weeks.flatMap((week, column) => {
    const day = week.find(day => day !== null);
    if (!day) return [];
    const month = monthFormat.format(new Date(`${day.date}T00:00:00Z`));
    const previousDay = calendar.weeks[column - 1]?.find(day => day !== null);
    const previousMonth = previousDay ? monthFormat.format(new Date(`${previousDay.date}T00:00:00Z`)) : "";
    if (month === previousMonth) return [];
    return [{ month, column }];
  });

  return <a className={styles.githubCard} href={profile.github} target="_blank" rel="noopener noreferrer" aria-label={`${calendar.total.toLocaleString("en")} GitHub contributions in the last 3 months. View ${profile.githubHandle}'s activity on GitHub (opens in a new tab)`}>
    <svg className={styles.contributionChart} viewBox={`0 0 ${width} 128`} role="img" aria-label={`GitHub contribution calendar from ${calendar.start} to ${calendar.end}`}>
      {months.map(({ month, column }) => <text key={`${month}-${column}`} x={Math.min(column * 16, width - 18)} y="10" className={styles.contributionMonth}>{month}</text>)}
      {calendar.weeks.map((week, column) => week.map((day, row) => day ? <rect key={day.date} x={column * 16} y={18 + row * 16} width="14" height="14" data-level={day.level} className={styles.contributionDay}>
        <title>{`${day.count} ${day.count === 1 ? "contribution" : "contributions"} on ${dateFormat.format(new Date(`${day.date}T00:00:00Z`))}`}</title>
      </rect> : null))}
    </svg>
    <p className={styles.contributionTotal}><strong>{calendar.total.toLocaleString("en")}</strong> contributions in the last 3 months</p>
  </a>;
}
