import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import styles from "@/components/portfolio.module.css";

export default function NotFound() {
  return <><SectionHeading title="not found" note="404" /><div className={styles.notFound}><h2>This page took a different path.</h2><p>The page you&apos;re looking for isn&apos;t here.</p><Link href="/">← back to about</Link></div></>;
}
