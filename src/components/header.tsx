"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/data/portfolio";
import styles from "./portfolio.module.css";

const navigation = [
  { href: "/", label: "about" },
  { href: "/work/", label: "work" },
  { href: "/projects/", label: "projects" },
];

export function Header() {
  const pathname = usePathname();

  function toggleTheme() {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("portfolio-theme", next); } catch { /* The toggle also works without storage. */ }
  }

  return (
    <header className={styles.header}>
      <div className={styles.identity}>
        <Link href="/" className={styles.signature} aria-label={`${profile.name} — home`}>{profile.name}</Link>
        <p className={styles.tagline}>{profile.tagline}</p>
      </div>
      <button className={styles.themeToggle} onClick={toggleTheme} title="Toggle light and dark theme">
        <span className={styles.moon}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><path d="M20.8 13.3A8.8 8.8 0 0 1 10.7 3.2a8.8 8.8 0 1 0 10.1 10.1Z" /></svg>
          <span className="sr-only">Switch to dark mode</span>
        </span>
        <span className={styles.sun}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
          <span className="sr-only">Switch to light mode</span>
        </span>
      </button>
      <nav className={styles.nav} aria-label="Main navigation">
        {navigation.map(({ href, label }) => {
          const active = pathname.replace(/\/$/, "") === href.replace(/\/$/, "");
          return <Link key={href} href={href} aria-current={active ? "page" : undefined}>{label}</Link>;
        })}
        <a href={profile.github} target="_blank" rel="noopener noreferrer">github <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a>
      </nav>
    </header>
  );
}
