import Image from "next/image";
import styles from "./portfolio.module.css";

const imageProps = {
  width: 1774,
  height: 887,
  sizes: "(max-width: 767px) 100vw, 620px",
} as const;

export function ThemeArt() {
  return <figure className={styles.artFigure}>
    <div className={styles.artwork}>
      {/* CSS follows the saved theme before hydration. Lazy loading avoids fetching the hidden variant. */}
      <Image {...imageProps} src="/images/about-light.png" alt="A classical figure gazing at a cobalt celestial vortex above an engraved landscape" fetchPriority="high" className={styles.artLight} />
      <Image {...imageProps} src="/images/about-dark.png" alt="A classical figure gazing at a black-and-white celestial vortex above an engraved landscape" fetchPriority="high" className={styles.artDark} />
    </div>
    <figcaption><span>an idea, a few iterations, something real.</span><span aria-hidden="true">↗</span></figcaption>
  </figure>;
}
