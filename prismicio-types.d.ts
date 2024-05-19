// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type ComingsoonDocumentDataSlicesSlice = MovieBannerSlice;

/**
 * Content for ComingSoon documents
 */
interface ComingsoonDocumentData {
  /**
   * Slice Zone field in *ComingSoon*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: comingsoon.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ComingsoonDocumentDataSlicesSlice>;
}

/**
 * ComingSoon document from Prismic
 *
 * - **API ID**: `comingsoon`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ComingsoonDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ComingsoonDocumentData>,
    "comingsoon",
    Lang
  >;

type FooterDocumentDataSlicesSlice = LinkListSlice;

/**
 * Content for Footer documents
 */
interface FooterDocumentData {
  /**
   * Slice Zone field in *Footer*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<FooterDocumentDataSlicesSlice>;
}

/**
 * Footer document from Prismic
 *
 * - **API ID**: `footer`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FooterDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<FooterDocumentData>,
    "footer",
    Lang
  >;

type InstitutionalDocumentDataSlicesSlice = PromotionSlice | RichTextSlice;

/**
 * Content for Institucional documents
 */
interface InstitutionalDocumentData {
  /**
   * Slice Zone field in *Institucional*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: institutional.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<InstitutionalDocumentDataSlicesSlice> /**
   * Meta Description field in *Institucional*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: institutional.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Institucional*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: institutional.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Institucional*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: institutional.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Institucional document from Prismic
 *
 * - **API ID**: `institutional`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type InstitutionalDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<InstitutionalDocumentData>,
    "institutional",
    Lang
  >;

type MovieDocumentDataSlicesSlice =
  | ScheduleSlice
  | RichTextSlice
  | PromotionSlice;

/**
 * Content for Filme documents
 */
interface MovieDocumentData {
  /**
   * Título field in *Filme*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: movie.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Sinopse field in *Filme*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: movie.sinopse
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  sinopse: prismic.RichTextField;

  /**
   * Duração field in *Filme*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: movie.duration
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  duration: prismic.KeyTextField;

  /**
   * Classificação field in *Filme*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: movie.classification
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  classification: prismic.KeyTextField;

  /**
   * Trailer field in *Filme*
   *
   * - **Field Type**: Embed
   * - **Placeholder**: *None*
   * - **API ID Path**: movie.trailer
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#embed
   */
  trailer: prismic.EmbedField;

  /**
   * Imagem field in *Filme*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: movie.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Tema field in *Filme*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: movie.theme
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  theme: prismic.KeyTextField;

  /**
   * Em breve field in *Filme*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: movie.comingSoon
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  comingSoon: prismic.BooleanField;

  /**
   * Slice Zone field in *Filme*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: movie.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<MovieDocumentDataSlicesSlice> /**
   * Meta Description field in *Filme*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: movie.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Filme*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: movie.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Filme*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: movie.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Filme document from Prismic
 *
 * - **API ID**: `movie`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type MovieDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<MovieDocumentData>, "movie", Lang>;

type PageDocumentDataSlicesSlice =
  | PromotionSlice
  | LinkListSlice
  | MovieBannerSlice
  | SpotlightSlice
  | RichTextSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Title field in *Page*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

export type AllDocumentTypes =
  | ComingsoonDocument
  | FooterDocument
  | InstitutionalDocument
  | MovieDocument
  | PageDocument;

/**
 * Primary content in *LinkList → Default → Primary*
 */
export interface LinkListSliceDefaultPrimary {
  /**
   * Título field in *LinkList → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: link_list.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;
}

/**
 * Primary content in *LinkList → Items*
 */
export interface LinkListSliceDefaultItem {
  /**
   * Link field in *LinkList → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: link_list.items[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Label field in *LinkList → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: link_list.items[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;
}

/**
 * Default variation for LinkList Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type LinkListSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<LinkListSliceDefaultPrimary>,
  Simplify<LinkListSliceDefaultItem>
>;

/**
 * Slice variation for *LinkList*
 */
type LinkListSliceVariation = LinkListSliceDefault;

/**
 * LinkList Shared Slice
 *
 * - **API ID**: `link_list`
 * - **Description**: LinkList
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type LinkListSlice = prismic.SharedSlice<
  "link_list",
  LinkListSliceVariation
>;

/**
 * Primary content in *MovieBanner → Items*
 */
export interface MovieBannerSliceDefaultItem {
  /**
   * Título field in *MovieBanner → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: movie_banner.items[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Banner field in *MovieBanner → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: movie_banner.items[].banner
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  banner: prismic.ImageField<never>;

  /**
   * Data de Lançamento field in *MovieBanner → Items*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: movie_banner.items[].comingIn
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  comingIn: prismic.DateField;

  /**
   * Link field in *MovieBanner → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: movie_banner.items[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Default variation for MovieBanner Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MovieBannerSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<MovieBannerSliceDefaultItem>
>;

/**
 * Slice variation for *MovieBanner*
 */
type MovieBannerSliceVariation = MovieBannerSliceDefault;

/**
 * MovieBanner Shared Slice
 *
 * - **API ID**: `movie_banner`
 * - **Description**: MovieBanner
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MovieBannerSlice = prismic.SharedSlice<
  "movie_banner",
  MovieBannerSliceVariation
>;

/**
 * Primary content in *Promotion → Items*
 */
export interface PromotionSliceDefaultItem {
  /**
   * Título field in *Promotion → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: promotion.items[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Conteúdo field in *Promotion → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: promotion.items[].content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;

  /**
   * Imagem field in *Promotion → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: promotion.items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Link field in *Promotion → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: promotion.items[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Default variation for Promotion Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PromotionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<PromotionSliceDefaultItem>
>;

/**
 * Slice variation for *Promotion*
 */
type PromotionSliceVariation = PromotionSliceDefault;

/**
 * Promotion Shared Slice
 *
 * - **API ID**: `promotion`
 * - **Description**: Promotion
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PromotionSlice = prismic.SharedSlice<
  "promotion",
  PromotionSliceVariation
>;

/**
 * Primary content in *RichText → Default → Primary*
 */
export interface RichTextSliceDefaultPrimary {
  /**
   * Content field in *RichText → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Lorem ipsum...
   * - **API ID Path**: rich_text.default.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;
}

/**
 * Default variation for RichText Slice
 *
 * - **API ID**: `default`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<RichTextSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *RichText*
 */
type RichTextSliceVariation = RichTextSliceDefault;

/**
 * RichText Shared Slice
 *
 * - **API ID**: `rich_text`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSlice = prismic.SharedSlice<
  "rich_text",
  RichTextSliceVariation
>;

/**
 * Primary content in *Schedule → Default → Primary*
 */
export interface ScheduleSliceDefaultPrimary {
  /**
   * Data field in *Schedule → Default → Primary*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: schedule.default.primary.date
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  date: prismic.DateField;
}

/**
 * Primary content in *Schedule → Items*
 */
export interface ScheduleSliceDefaultItem {
  /**
   * Sala field in *Schedule → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: schedule.items[].movieTheater
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  movieTheater: prismic.KeyTextField;

  /**
   * Horário field in *Schedule → Items*
   *
   * - **Field Type**: Timestamp
   * - **Placeholder**: *None*
   * - **API ID Path**: schedule.items[].time
   * - **Documentation**: https://prismic.io/docs/field#timestamp
   */
  time: prismic.TimestampField;

  /**
   * Idioma field in *Schedule → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: schedule.items[].language
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  language: prismic.KeyTextField;

  /**
   * Preço field in *Schedule → Items*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: schedule.items[].price
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  price: prismic.NumberField;
}

/**
 * Default variation for Schedule Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ScheduleSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ScheduleSliceDefaultPrimary>,
  Simplify<ScheduleSliceDefaultItem>
>;

/**
 * Slice variation for *Schedule*
 */
type ScheduleSliceVariation = ScheduleSliceDefault;

/**
 * Schedule Shared Slice
 *
 * - **API ID**: `schedule`
 * - **Description**: Schedule
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ScheduleSlice = prismic.SharedSlice<
  "schedule",
  ScheduleSliceVariation
>;

/**
 * Primary content in *Spotlight → Items*
 */
export interface SpotlightSliceDefaultItem {
  /**
   * Nome field in *Spotlight → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: spotlight.items[].name
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  name: prismic.RichTextField;

  /**
   * Sinopse field in *Spotlight → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: spotlight.items[].sinopse
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  sinopse: prismic.RichTextField;

  /**
   * Imagem field in *Spotlight → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: spotlight.items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Duração field in *Spotlight → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: spotlight.items[].duration
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  duration: prismic.RichTextField;

  /**
   * Classificação field in *Spotlight → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: spotlight.items[].classification
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  classification: prismic.RichTextField;

  /**
   * Trailer field in *Spotlight → Items*
   *
   * - **Field Type**: Embed
   * - **Placeholder**: *None*
   * - **API ID Path**: spotlight.items[].trailer
   * - **Documentation**: https://prismic.io/docs/field#embed
   */
  trailer: prismic.EmbedField;

  /**
   * Tema field in *Spotlight → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: spotlight.items[].theme
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  theme: prismic.RichTextField;

  /**
   * Link field in *Spotlight → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: spotlight.items[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Default variation for Spotlight Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SpotlightSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<SpotlightSliceDefaultItem>
>;

/**
 * Slice variation for *Spotlight*
 */
type SpotlightSliceVariation = SpotlightSliceDefault;

/**
 * Spotlight Shared Slice
 *
 * - **API ID**: `spotlight`
 * - **Description**: Spotlight
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SpotlightSlice = prismic.SharedSlice<
  "spotlight",
  SpotlightSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      ComingsoonDocument,
      ComingsoonDocumentData,
      ComingsoonDocumentDataSlicesSlice,
      FooterDocument,
      FooterDocumentData,
      FooterDocumentDataSlicesSlice,
      InstitutionalDocument,
      InstitutionalDocumentData,
      InstitutionalDocumentDataSlicesSlice,
      MovieDocument,
      MovieDocumentData,
      MovieDocumentDataSlicesSlice,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      AllDocumentTypes,
      LinkListSlice,
      LinkListSliceDefaultPrimary,
      LinkListSliceDefaultItem,
      LinkListSliceVariation,
      LinkListSliceDefault,
      MovieBannerSlice,
      MovieBannerSliceDefaultItem,
      MovieBannerSliceVariation,
      MovieBannerSliceDefault,
      PromotionSlice,
      PromotionSliceDefaultItem,
      PromotionSliceVariation,
      PromotionSliceDefault,
      RichTextSlice,
      RichTextSliceDefaultPrimary,
      RichTextSliceVariation,
      RichTextSliceDefault,
      ScheduleSlice,
      ScheduleSliceDefaultPrimary,
      ScheduleSliceDefaultItem,
      ScheduleSliceVariation,
      ScheduleSliceDefault,
      SpotlightSlice,
      SpotlightSliceDefaultItem,
      SpotlightSliceVariation,
      SpotlightSliceDefault,
    };
  }
}
