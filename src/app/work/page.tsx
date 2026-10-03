import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { ExperienceRow } from "@/components/experience-row";
import { experiences, profile } from "@/data/portfolio";
import styles from "@/components/portfolio.module.css";

export const metadata: Metadata = { title: "Work", description: "Aditya's work in software development, agentic automation, and AI filmmaking." };

export default function WorkPage() {
  return <>
    <SectionHeading title="experience" note={`${experiences.length} experiences`} />
    <div className={styles.experienceList}>{experiences.map((experience) => <ExperienceRow key={experience.id} experience={experience} />)}</div>
    <section className={styles.focusSection} aria-labelledby="focus-heading">
      <div className={styles.subsectionHeading}><h2 id="focus-heading"><span aria-hidden="true">~/</span>areas of focus</h2><span>where my work meets</span></div>
      <div className={styles.focusGrid}>{profile.focus.map((focus, index) => <div key={focus}><span className={styles.focusNumber}>0{index + 1}</span><h3>{focus}</h3></div>)}</div>
    </section>
    <div className={styles.pageClosing}><p>Some of that work takes shape here.</p><Link href="/projects/">view selected projects <span aria-hidden="true">→</span></Link></div>
  </>;
}
