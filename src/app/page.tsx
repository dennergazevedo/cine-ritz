import { Metadata } from "next";

import * as prismic from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

import styles from './page.module.scss'
import Slider from "./components/Slider";
import ComingSoon from "./components/ComingSoon";
import { GiClapperboard } from "react-icons/gi";
import { BiCameraMovie } from "react-icons/bi";
import { IoTicketOutline } from "react-icons/io5";

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const home = await client.getByUID("page", "home");

  return {
    title: prismic.asText(home.data.title),
    description: home.data.meta_description,
    openGraph: {
      title: home.data.meta_title ?? undefined,
      images: [{ url: home.data.meta_image.url ?? "" }],
    },
  };
}

export default async function Index() {
  const client = createClient();
  const spotlight = await client.getByUID("spotlight", "spotlight");
  const comingSoon = await client.getByUID("comingsoon", "coming-soon");
  const promotion = await client.getByUID("promotion", "promotion");

  return (
    <main className={styles.main}>
      <div className={styles.inTheaters}>
        <h3><BiCameraMovie size={24}/>Em exibição</h3>
        <Slider>
          <SliceZone slices={spotlight.data.slices} components={components} />
        </Slider>
      </div>
      <div className={styles.comingSoon}>
        <h3><GiClapperboard size={24} /> Em breve</h3>
        <ComingSoon banners={comingSoon.data.slices}/>
      </div>
      <div className={styles.inTheaters}>
        <h3><IoTicketOutline size={24}/>Promoções</h3>
        <Slider>
          <SliceZone slices={promotion.data.slices} components={components} />
        </Slider>
      </div>
    </main>
  )
}