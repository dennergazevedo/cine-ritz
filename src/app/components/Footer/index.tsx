import Image from 'next/image';
import styles from './styles.module.scss'

import logo from '../../assets/logo.png'
import Link from 'next/link';

import { createClient } from "@/prismicio";
import { components } from "@/slices";

import { FaInstagram } from "react-icons/fa6";
import { SlLocationPin } from "react-icons/sl";
import { SliceZone } from '@prismicio/react';

const Footer: React.FC = async () => {
  const client = createClient();
  const footer = await client.getAllByType("footer");

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerBody}>
        <div className={styles.dividerContainer}>
          <Link href="/" className={styles.logoContainer}>
            <Image src={logo} alt="CineRitz João Monlevade Logo" width={40} height={40}/>
            <p>Cine Ritz - João Monlevade</p>
          </Link>
          <a 
            href="https://www.google.com/maps/place/CineRitz+-+João+Monlevade/@-19.8084932,-43.1890224,1432m/data=!3m2!1e3!4b1!4m6!3m5!1s0xa5a974094a8d7f:0x5651abf7095a8919!8m2!3d-19.8084932!4d-43.1864475!16s%2Fg%2F11l71q9rph?entry=ttu" 
            target='_blank'
            className={styles.iconList}
          >
            <div className={styles.footerText}>
              <SlLocationPin size={24}/>
            </div>
            <p className={styles.footerText}>
              Rua Antonio Gonçalves Moreira, nº 15 - João Monlevade, Minas Gerais
            </p>
          </a>
          <a 
            className={styles.iconList}
            href="https://www.instagram.com/cineritzmonlevade/" 
            target='_blank'
          >
            <div className={styles.footerText}>
              <FaInstagram size={24}/>
            </div>
            <p className={styles.footerText}>
              @cineritzmonlevade
            </p>
          </a>
        </div>
        <SliceZone slices={footer?.[0]?.data.slices} components={components} />
      </div>
      <div className={styles.privacy}>
        © Cine Ritz 2024 | Todos os direitos reservados | Feito por <a href="https://social.dnnr.dev" target="_blank">dnnr</a>
      </div>
    </footer>
  )
}

export default Footer;