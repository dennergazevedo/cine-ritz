import { Content } from "@prismicio/client";
import {
  PrismicLink,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Slider from "@/app/components/Slider";

import { IoTicketOutline } from "react-icons/io5";

export type PromotionProps = SliceComponentProps<Content.PromotionSlice>;

const Promotion = ({ slice }: PromotionProps): JSX.Element => {
  return (
    <div className={styles.inTheaters}>
      <h3>
        <IoTicketOutline size={24} />
        Promoções
      </h3>
      <Slider>
        {
          slice.items.map(promotion => (
            <PrismicLink
              data-slice-type={slice.slice_type}
              data-slice-variation={slice.variation}
              className={styles.promotionContainer}
              field={promotion.link}
              key={promotion.title}
            >
              <Image
                src={String(promotion.image.url)}
                alt={String(promotion.image.alt)}
                fill
              />
              <h3>{promotion.title}</h3>
              <div>
                <PrismicRichText field={promotion.content} />
              </div>
            </PrismicLink>
          ))
        }
      </Slider>
    </div>
  );
};

export default Promotion;
