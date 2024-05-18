import { Metadata } from "next";

import * as prismic from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

import styles from './page.module.scss'
import Slider from "./components/Slider";

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

  return (
    <main className={styles.main}>
      <Slider>
        <SliceZone slices={spotlight.data.slices} components={components} />
      </Slider>
    </main>
  )
}