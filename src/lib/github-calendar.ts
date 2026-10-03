export type ContributionDay = { date: string; count: number; level: number };

function attribute(tag: string, name: string) {
  return tag.match(new RegExp(`(?:^|\\s)${name}="([^"]*)"`))?.[1];
}

// Parse only public day metadata and tooltip counts, never render GitHub's HTML.
export function parseContributions(html: string): ContributionDay[] {
  const counts = new Map<string, number>();
  for (const match of html.matchAll(/<tool-tip\b([^>]*)>([\s\S]*?)<\/tool-tip>/g)) {
    const id = attribute(match[1], "for");
    const text = match[2].replace(/<[^>]*>/g, "").trim();
    const count = text.match(/^([\d,]+) contributions? on\b/);
    if (id && (count || /^No contributions on\b/.test(text))) {
      counts.set(id, count ? Number(count[1].replaceAll(",", "")) : 0);
    }
  }
  const days: ContributionDay[] = [];
  for (const match of html.matchAll(/<td\b[^>]*>/g)) {
    const date = attribute(match[0], "data-date");
    if (!date) continue;
    const level = Number(attribute(match[0], "data-level"));
    const count = counts.get(attribute(match[0], "id") ?? "");
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || count === undefined || !Number.isInteger(level) || level < 0 || level > 4) {
      throw new Error("GitHub contribution calendar format changed");
    }
    days.push({ date, count, level });
  }
  if (!days.length) throw new Error("GitHub contribution calendar is empty");
  return days.sort((a, b) => a.date.localeCompare(b.date));
}

export function createCalendar(days: ContributionDay[], now = new Date()) {
  const end = new Date(`${now.toISOString().slice(0, 10)}T00:00:00Z`);
  const start = new Date(end);
  // Clamp subtraction for dates such as May 31 -> February 28.
  start.setUTCDate(1);
  start.setUTCMonth(start.getUTCMonth() - 3);
  const lastDay = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth() + 1, 0)).getUTCDate();
  start.setUTCDate(Math.min(end.getUTCDate(), lastDay));
  start.setUTCDate(start.getUTCDate() + 1);
  const firstSunday = new Date(start);
  firstSunday.setUTCDate(firstSunday.getUTCDate() - firstSunday.getUTCDay());
  const byDate = new Map(days.map(day => [day.date, day]));
  const weeks: (ContributionDay | null)[][] = [];
  let total = 0;
  for (const cursor = new Date(firstSunday); cursor <= end; cursor.setUTCDate(cursor.getUTCDate() + 1)) {
    if (cursor.getUTCDay() === 0) weeks.push(Array(7).fill(null));
    if (cursor < start) continue;
    const date = cursor.toISOString().slice(0, 10);
    const day = byDate.get(date);
    if (!day) throw new Error(`GitHub contribution data missing for ${date}`);
    weeks[weeks.length - 1][cursor.getUTCDay()] = day;
    total += day.count;
  }
  return { weeks, total, start: start.toISOString().slice(0, 10), end: end.toISOString().slice(0, 10) };
}
