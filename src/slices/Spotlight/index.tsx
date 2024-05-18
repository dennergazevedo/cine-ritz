import { Content } from "@prismicio/client";
import {
  PrismicLink,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";

import styles from "./styles.module.scss";
import Image from "next/image";
import Trailer from "@/app/components/Trailler";
import Slider from "@/app/components/Slider";

import { BiCameraMovie } from "react-icons/bi";
import { FiPlus } from "react-icons/fi";

export type SpotlightProps = SliceComponentProps<Content.SpotlightSlice>;

const Spotlight = ({ slice }: SpotlightProps): JSX.Element => {
  return (
    <div className={styles.inTheaters}>
      <h3>
        <BiCameraMovie size={24} />
        Em exibição
      </h3>
      <Slider>
        {slice.items.map(spotlight => (
          <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
            className={styles.spotlightItem}
            key={String(spotlight.name)}
          >
            <PrismicLink
              field={slice.primary.link}
              className={styles.spotlightImageContainer}
            >
              <Image
                src={String(spotlight.image.url)}
                alt={String(spotlight.image.alt)}
                fill
              />
            </PrismicLink>
            <div className={styles.spotlightContent}>
              <PrismicLink field={spotlight.link}>
                <PrismicRichText field={spotlight.name} />
              </PrismicLink>
              <div className={styles.spotlightContentInfo}>
                <PrismicRichText field={spotlight.theme} />
                <PrismicRichText field={spotlight.duration} />
                <PrismicRichText field={spotlight.classification} />
              </div>
              <div
                className={styles.spotlightContentSinopse}
                data-device-control="desktop"
              >
                <PrismicRichText field={spotlight.sinopse} />
              </div>
            </div>
            <div className={styles.spotlightMediaContainer}>
              <Trailer
                title={spotlight.name}
                iframe={String(spotlight.trailer.html)}
              />
              <PrismicLink field={spotlight.link} className={styles.showMoreLink}>
                <FiPlus size={20}/>
                Ver mais
              </PrismicLink>
            </div>
          </section>
        ))}
      </Slider>
    </div>
  );
};

export default Spotlight;
