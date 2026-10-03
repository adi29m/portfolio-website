import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";
import { projects, profile } from "@/data/portfolio";
import styles from "@/components/portfolio.module.css";

export const metadata: Metadata = { title: "Projects", description: "Selected projects by Aditya Manjrekar: Rep Tracker, Musify, Carbon Ledger, and Striff Studio." };

export default function ProjectsPage() {
  return <>
    <SectionHeading title="projects" note="things i built" />
    <div className={styles.projectGrid}>{projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div>
    <div className={styles.pageClosing}><p>More code, experiments, and works in progress.</p><a href={profile.github} target="_blank" rel="noopener noreferrer">find me on github <span aria-hidden="true">↗</span></a></div>
  </>;
}
