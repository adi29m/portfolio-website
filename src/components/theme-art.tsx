import Image from "next/image";
import { artwork } from "@/data/artwork";
import styles from "./portfolio.module.css";

const imageProps = {
  width: 1774,
  height: 887,
  placeholder: "blur",
  // Preserve the lossless source pixels; project images still use optimization.
  unoptimized: true,
} as const;

export function ThemeArt() {
  return <figure className={styles.artFigure}>
    <div className={styles.artwork}>
      {/* CSS follows the saved theme before hydration. Lazy loading avoids fetching the hidden variant. */}
      <Image {...imageProps} src={artwork.light} alt="A classical figure gazing at a cobalt celestial vortex above an engraved landscape" fetchPriority="high" className={styles.artLight} />
      <Image {...imageProps} src={artwork.dark} alt="A classical figure gazing at a black-and-white celestial vortex above an engraved landscape" fetchPriority="high" className={styles.artDark} />
    </div>
    <figcaption><span>an idea, a few iterations, something real.</span><span aria-hidden="true">↗</span></figcaption>
  </figure>;
}
