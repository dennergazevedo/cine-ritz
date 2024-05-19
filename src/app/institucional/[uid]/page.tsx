import { Metadata } from "next";
import { notFound } from "next/navigation";

import * as prismic from "@prismicio/client";
import styles from './styles.module.scss'

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";
import BackButton from "@/app/components/BackButton";

type Params = { uid: string };

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const page = await client
    .getByUID("institutional", params.uid)
    .catch(() => notFound());

  return {
    title: page.data.meta_title,
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
    .getByUID("institutional", params.uid)
    .catch(() => notFound());

  return (
    <section className={styles.institutionalPageContainer}>
      <BackButton />
      <SliceZone slices={page.data.slices} components={components} />
    </section>
  )
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("institutional", {
    predicates: [prismic.filter.not("my.institutional.uid", "institutional")],
  });

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
