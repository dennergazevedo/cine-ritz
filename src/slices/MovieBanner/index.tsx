import { Content } from "@prismicio/client";
import { PrismicLink, SliceComponentProps } from "@prismicio/react";
import styles from './styles.module.scss';
import Image from "next/image";
import { months } from "@/utils/month";

export type MovieBannerProps = SliceComponentProps<Content.MovieBannerSlice>;

import { GiClapperboard } from "react-icons/gi";
import { getMovieLink } from "@/utils/link";

const MovieBanner = ({ slice }: MovieBannerProps): JSX.Element => {

  return (
    <div className={styles.comingSoon}>
      <h3><GiClapperboard size={24} /> Em breve</h3>
      <section className={styles.comingSoonContainer}>
        {
          slice.items.map(movieBanner => (
            <PrismicLink
              data-slice-type={slice.slice_type}
              data-slice-variation={slice.variation}
              className={styles.movieBannerContainer}
              field={movieBanner.link}
              key={movieBanner.title}
              href={getMovieLink(movieBanner.link)}
            >
              <div className={styles.movieBannerImageContainer}>
                <Image 
                  src={String(movieBanner.banner.url)} 
                  alt={String(movieBanner.banner.alt)}
                  fill
                />
              </div>
              <h3>
                {movieBanner.title}
              </h3>
              {
                slice?.primary?.comingIn &&
                <div className={styles.movieBannerFlagDate}>
                  <div className={styles.dayContainer}>
                    <p className={styles.month}>{months[new Date(String(movieBanner.comingIn)).getMonth()]}</p>
                    <p className={styles.day}>{new Date(String(movieBanner.comingIn)).getDate()}</p>
                  </div>
                  <p className={styles.year}>{new Date(String(movieBanner.comingIn)).getFullYear()}</p>
                </div>
              }
            </PrismicLink>
          ))
        }
      </section>
    </div>
  );
};

export default MovieBanner;
