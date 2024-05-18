import Link from "next/link";
import styles from './styles.module.scss'
import { FiPlus } from "react-icons/fi";
import { PrismicLink } from "@prismicio/react";

const ShowMore: React.FC<ShowMoreProps> = ({ link, target }: ShowMoreProps) => {
  return (
    <PrismicLink field={link} target={target ?? "_self"} className={styles.showMoreLink}>
      <FiPlus size={20}/>
      Ver mais
    </PrismicLink>
  )
}

export default ShowMore;