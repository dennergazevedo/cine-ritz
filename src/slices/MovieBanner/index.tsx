import { Content } from "@prismicio/client";
import { PrismicLink, SliceComponentProps } from "@prismicio/react";
import styles from './styles.module.scss';
import Image from "next/image";
import { months } from "@/utils/month";

export type MovieBannerProps = SliceComponentProps<Content.MovieBannerSlice>;

const MovieBanner = ({ slice }: MovieBannerProps): JSX.Element => {

  const releaseDate = new Date(String(slice.primary.comingIn));

  return (
    <PrismicLink
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.movieBannerContainer}
      field={slice.primary.link}
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
      {
        slice?.primary?.comingIn &&
        <div className={styles.movieBannerFlagDate}>
          <div className={styles.dayContainer}>
            <p className={styles.month}>{months[releaseDate.getMonth()]}</p>
            <p className={styles.day}>{releaseDate.getDate()}</p>
          </div>
          <p className={styles.year}>{releaseDate.getFullYear()}</p>
        </div>
      }
    </PrismicLink>
  );
};

export default MovieBanner;
