import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import { Ubuntu } from "next/font/google";

import "./globals.css";
import styles from "./page.module.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Image from "next/image";
import bg from './assets/bg.jpg';
import Modal from "./components/Modal";

const ubuntu = Ubuntu({
  weight: ["400", "500", "700"],
  subsets: ['latin'],
  preload: true
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      <body className={ubuntu.className}>
        <Modal />
        <div className={styles.bg}>
          <Image src={bg} alt="foto de cinema de background"/>
        </div>
        <Header />
        {children}
        <Footer />
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
