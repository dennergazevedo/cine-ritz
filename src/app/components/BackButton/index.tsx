'use client'
import { useRouter } from "next/navigation";
import { MdArrowBackIos } from "react-icons/md";
import styles from './styles.module.scss';

const BackButton: React.FC = () => {
  const router = useRouter();

  return (
    <button
      type="button"
      className={styles.goBackButton}
      onClick={() => router.back()}
    >
      <MdArrowBackIos size={16} /> voltar
    </button>
  );
};

export default BackButton;
