import { Content } from "@prismicio/client";
import { PrismicLink, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import styles from './styles.module.scss'
import Image from "next/image";

export type PromotionProps = SliceComponentProps<Content.PromotionSlice>;

const Promotion = ({ slice }: PromotionProps): JSX.Element => {

  return (
    <PrismicLink
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.promotionContainer}
      field={slice.primary.link}
    >
      <Image 
        src={String(slice.primary.image.url)} 
        alt={String(slice.primary.image.alt)}
        fill
      />
      <h3>{slice.primary.title}</h3>
      <div>
        <PrismicRichText field={slice.primary.content} />
      </div>
    </PrismicLink>
  );
};

export default Promotion;
