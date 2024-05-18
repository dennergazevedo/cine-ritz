import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import styles from './styles.module.scss';
import Image from "next/image";

export type MovieBannerProps = SliceComponentProps<Content.MovieBannerSlice>;

const MovieBanner = ({ slice }: MovieBannerProps): JSX.Element => {

  console.log("slice", slice);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.movieBannerContainer}
    >
      <div className={styles.movieBannerImageContainer}>
        <Image 
          src={String(slice.primary.banner.url)} 
          alt={String(slice.primary.banner.alt)}
          fill
        />
      </div>
      <h3>
        {slice.primary.title}
      </h3>
    </section>
  );
};

export default MovieBanner;
