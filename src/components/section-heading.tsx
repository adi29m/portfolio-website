import styles from "./portfolio.module.css";

export function SectionHeading({ title, note }: { title: string; note?: string }) {
  return <div className={styles.sectionHeading}>
    <h1><span aria-hidden="true">~/</span>{title}</h1>
    {note ? <span className={styles.sectionNote}>{note}</span> : null}
  </div>;
}
