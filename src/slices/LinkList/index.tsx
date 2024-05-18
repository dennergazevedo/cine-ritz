import { Content } from "@prismicio/client";
import styles from './styles.module.scss'
import { PrismicLink, PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type LinkListProps = SliceComponentProps<Content.LinkListSlice>;

const LinkList = ({ slice }: LinkListProps): JSX.Element => {
  return (
    <div
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.dividerContainer}
    >
      <PrismicRichText field={slice.primary.title}/>
      {
        slice.items.map(link => (
          <PrismicLink field={link.link} key={link.label}>
            {link.label}
          </PrismicLink>
        ))
      }
    </div>
  );
};

export default LinkList;
