import Image from "next/image";
import type { Project } from "@/data/portfolio";
import styles from "./portfolio.module.css";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const links = [
    { label: "live", href: project.liveUrl },
    { label: "source", href: project.sourceUrl },
    { label: "video", href: project.videoUrl },
  ].filter((link) => Boolean(link.href));

  return <article className={styles.projectCard}>
    <div className={styles.projectImage}>
      <Image src={project.image} alt={project.imageAlt} width={1200} height={750} sizes="(max-width: 767px) 100vw, 480px" preload={index < 2} />
      <span className={styles.projectNumber} aria-hidden="true">0{index + 1}</span>
    </div>
    <div className={styles.projectBody}>
      <h2>{project.name}</h2>
      <p className={styles.stack}>{project.technologies.join(" · ")}</p>
      <p className={styles.projectDescription}>{project.description}</p>
      <div className={styles.projectLinks}>
        {links.length ? links.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} ${link.label} (opens in a new tab)`}><span aria-hidden="true">→</span> {link.label}</a>) : <span className={styles.privateNote}>{project.category}</span>}
      </div>
    </div>
  </article>;
}
