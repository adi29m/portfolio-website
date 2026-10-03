import Image from "next/image";
import lightArtwork from "../../public/images/about-light.webp";
import darkArtwork from "../../public/images/about-dark.webp";
import styles from "./portfolio.module.css";

const imageProps = {
  width: 1774,
  height: 887,
  sizes: "(max-width: 767px) calc(100vw - 66px), (max-width: 900px) 55vw, 620px",
  placeholder: "blur",
} as const;

export function ThemeArt() {
  return <figure className={styles.artFigure}>
    <div className={styles.artwork}>
      {/* CSS follows the saved theme before hydration. Lazy loading avoids fetching the hidden variant. */}
      <Image {...imageProps} src={lightArtwork} alt="A classical figure gazing at a cobalt celestial vortex above an engraved landscape" fetchPriority="high" className={styles.artLight} />
      <Image {...imageProps} src={darkArtwork} alt="A classical figure gazing at a black-and-white celestial vortex above an engraved landscape" fetchPriority="high" className={styles.artDark} />
    </div>
    <figcaption><span>an idea, a few iterations, something real.</span><span aria-hidden="true">↗</span></figcaption>
  </figure>;
}
