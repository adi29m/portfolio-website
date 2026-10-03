import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { Sidebar } from "@/components/sidebar";
import { ThemeArt } from "@/components/theme-art";
import { profile } from "@/data/portfolio";
import styles from "@/components/portfolio.module.css";

export const revalidate = 3600;

export default function AboutPage() {
  return <div className={styles.aboutGrid}>
    <div className={styles.aboutContent}>
      <SectionHeading title="about" note="TL;DR" />
      <div className={styles.biography}>
        {profile.biography.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
      <ThemeArt />
      <div className={styles.aboutClosing}>
        <span>A few things, from idea to interface.</span>
        <Link href="/projects/">explore my projects <span aria-hidden="true">→</span></Link>
      </div>
    </div>
    <Sidebar />
  </div>;
}
