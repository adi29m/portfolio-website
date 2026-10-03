import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "@fontsource/dancing-script/600.css";
import "./globals.css";
import { Header } from "@/components/header";
import { profile } from "@/data/portfolio";
import styles from "@/components/portfolio.module.css";

export const metadata: Metadata = {
  title: { default: `${profile.name} — Developer & AI Creator`, template: `%s · ${profile.name}` },
  description: profile.description,
  applicationName: `${profile.name} Portfolio`,
  authors: [{ name: profile.name, url: profile.github }],
  openGraph: { title: `${profile.name} — Developer & AI Creator`, description: profile.description, type: "website", locale: "en_US" },
  twitter: { card: "summary", title: profile.name, description: profile.description },
};

const initializeTheme = `(function(){try{var t=localStorage.getItem('portfolio-theme');document.documentElement.dataset.theme=t==='dark'?'dark':'light'}catch(e){document.documentElement.dataset.theme='light'}})();`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning>
    <head><script dangerouslySetInnerHTML={{ __html: initializeTheme }} /></head>
    <body>
      <a href="#main" className="skip-link">Skip to content</a>
      <div className={styles.siteShell}>
        <Header />
        <main id="main" className={styles.main} tabIndex={-1}>{children}</main>
        <footer className={styles.footer}>
          <span>© 2026 {profile.name}</span>
          <span>built with care <span className={styles.footerStar} aria-hidden="true">✳</span></span>
        </footer>
      </div>
    </body>
  </html>;
}
