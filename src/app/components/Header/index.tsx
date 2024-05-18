import Image from 'next/image';
import styles from './styles.module.scss'

import logo from '../../assets/logo.png'
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className={styles.headerContainer}>
      <Link href="/">
        <Image src={logo} alt="CineRitz João Monlevade Logo" width={64} height={64}/>
      </Link>
    </header>
  )
}

export default Header;