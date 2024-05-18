import { Content } from "@prismicio/client";
import { PrismicLink, PrismicRichText, SliceComponentProps } from "@prismicio/react";

import styles from './styles.module.scss'
import Image from "next/image";
import Trailer from "@/app/components/Trailler";
import ShowMore from "@/app/components/ShowMore";

export type SpotlightProps = SliceComponentProps<Content.SpotlightSlice>;

const Spotlight = ({ slice }: SpotlightProps): JSX.Element => {

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.spotlightItem}
    >
      <PrismicLink field={slice.primary.link} className={styles.spotlightImageContainer}>
        <Image 
          src={String(slice.primary.image.url)} 
          alt={String(slice.primary.image.alt)}
          fill
        />
      </PrismicLink>
      <div className={styles.spotlightContent}>
        <PrismicLink field={slice.primary.link}>
          <PrismicRichText field={slice.primary.name} />
        </PrismicLink>
        <div className={styles.spotlightContentInfo}>
          <PrismicRichText field={slice.primary.theme} />
          <PrismicRichText field={slice.primary.duration} />
          <PrismicRichText field={slice.primary.classification} />
        </div>
        <div className={styles.spotlightContentSinopse} data-device-control="desktop">
          <PrismicRichText field={slice.primary.sinopse} />
        </div>
      </div>
      <div className={styles.spotlightMediaContainer}>
        <Trailer 
          title={slice.primary.name}
          iframe={String(slice.primary.trailer.html)} 
        />
        <ShowMore link={slice.primary.link}/>
      </div>
    </section>
  );
};

export default Spotlight;
