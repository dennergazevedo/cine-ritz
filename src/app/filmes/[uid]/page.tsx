import { Metadata } from "next";
import { notFound } from "next/navigation";

import * as prismic from "@prismicio/client";
import styles from './styles.module.scss'

import { createClient } from "@/prismicio";
import Image from "next/image";

import { FaRegClock } from "react-icons/fa";
import { FaTheaterMasks } from "react-icons/fa";
import { IoLockOpenOutline } from "react-icons/io5";
import { TiDocumentText } from "react-icons/ti";
import { MdOutlineLocalMovies } from "react-icons/md";
import { PrismicRichText, SliceZone } from "@prismicio/react";
import { components } from "@/slices";

type Params = { uid: string };

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const page = await client
    .getByUID("movie", params.uid)
    .catch(() => notFound());

  return {
    title: page.data.title,
    description: page.data.meta_description,
    openGraph: {
      title: page.data.meta_title || undefined,
      images: [
        {
          url: page.data.meta_image.url || "",
        },
      ],
    },
  };
}

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID("movie", params.uid)
    .catch(() => notFound());

  return (
    <section className={styles.moviePageContainer}>
      <div className={styles.moviePagePrincipal}>
        <div className={styles.moviePageImageContainer}>
          <Image 
            src={String(page.data.image.url)} 
            alt={String(page.data.image.alt)}
            fill
          />
        </div>
        <div className={styles.moviePageContent}>
          <h1 className={styles.moviePageTitle}>{page.data.title}</h1>
          <div className={styles.moviePageAttributesContainer}>
            <div className={styles.moviePageAttributes}>
              <FaRegClock size={20}/>
              <p>{page.data.duration}</p>
            </div>
            <div className={styles.moviePageAttributes}>
              <FaTheaterMasks size={20}/>
              <p>{page.data.theme}</p>
            </div>
            <div className={styles.moviePageAttributes}>
              <IoLockOpenOutline size={20}/>
              <p>{page.data.classification}</p>
            </div>
          </div>
          <div className={styles.moviePageSinopse}>
            <h3><TiDocumentText size={24}/> Sinopse</h3>
            <PrismicRichText field={page.data.sinopse}/>
          </div>
        </div>
      </div>
      <div className={styles.moviePageTrailer}>
        <h3>Trailer</h3>
        <div 
          className={styles.moviePageTrailerIFrame}
          dangerouslySetInnerHTML={{__html: String(page.data.trailer.html)}} 
        />
      </div>
      <div className={styles.moviePageSchedule}>
        <h3><MdOutlineLocalMovies size={24} />Salas & Horários</h3>
        <SliceZone slices={page.data.slices} components={components} />
      </div>
    </section>
  )
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("movie", {
    predicates: [prismic.filter.not("my.movie.uid", "movie")],
  });

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
