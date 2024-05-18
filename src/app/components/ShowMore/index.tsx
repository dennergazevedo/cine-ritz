import Link from "next/link";
import styles from './styles.module.scss'
import { FiPlus } from "react-icons/fi";

const ShowMore: React.FC<ShowMoreProps> = ({link, target}: ShowMoreProps) => {
  return (
    <Link href={link} target={target ?? "_self"} className={styles.showMoreLink}>
      <FiPlus size={20}/>
      Ver mais
    </Link>
  )
}

export default ShowMore;