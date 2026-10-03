import { formatMonth, type Experience } from "@/data/portfolio";
import styles from "./portfolio.module.css";

export function ExperienceRow({ experience }: { experience: Experience }) {
  return <article className={styles.experience}>
    <div className={styles.monogram} data-kind={experience.id} aria-hidden="true">{experience.initials}</div>
    <div className={styles.experienceContent}>
      <div className={styles.experienceTop}>
        <h2>{experience.organization || experience.title}</h2>
        <p className={styles.dates} data-current={experience.current}>
          <time dateTime={experience.start}>{formatMonth(experience.start)}</time>
          <span> – </span>
          {experience.end ? <time dateTime={experience.end}>{formatMonth(experience.end)}</time> : "Present"}
        </p>
      </div>
      <p className={styles.role}>{experience.organization ? <>{experience.title}<span aria-hidden="true"> · </span></> : null}{experience.context}</p>
      <p className={styles.experienceDescription}>{experience.description}</p>
    </div>
  </article>;
}
