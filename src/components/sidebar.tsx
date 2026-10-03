import Link from "next/link";
import { GitHubCalendar } from "./github-calendar";
import { profile, projects } from "@/data/portfolio";
import styles from "./portfolio.module.css";

export function Sidebar() {
  return <aside className={styles.sidebar} aria-label="Profile at a glance">
    <section className={styles.sidebarSection}>
      <div className={styles.asideHeading}><h2>GitHub</h2><a href={profile.github} target="_blank" rel="noopener noreferrer">@{profile.githubHandle} ↗</a></div>
      <GitHubCalendar />
    </section>
    <section className={styles.sidebarSection}>
      <h2 className={styles.asideLabel}>Current status</h2>
      <ul className={styles.statusList}>{profile.status.map((status) => <li key={status}><span aria-hidden="true">*</span>{status}</li>)}</ul>
    </section>
    <section className={styles.sidebarSection}>
      <h2 className={styles.asideLabel}>Links</h2>
      <ul className={styles.linkList}>
        <li><a href={profile.github} target="_blank" rel="noopener noreferrer">github <span>· /{profile.githubHandle}</span><span className={styles.linkArrow} aria-hidden="true">↗</span></a></li>
        {profile.email ? <li><a href={`mailto:${profile.email}`}>email <span>· say hello</span><span className={styles.linkArrow} aria-hidden="true">↗</span></a></li> : null}
        {profile.linkedin ? <li><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">linkedin <span>· let&apos;s connect</span></a></li> : null}
      </ul>
    </section>
    <section className={styles.sidebarSection}>
      <h2 className={styles.asideLabel}>Elsewhere here</h2>
      <ul className={styles.linkList}>
        <li><Link href="/work/">/work <span>· what I do</span></Link></li>
        <li><Link href="/projects/">/projects <span>· {projects.length} things I built</span></Link></li>
      </ul>
    </section>
  </aside>;
}
