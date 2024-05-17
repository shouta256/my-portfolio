export interface ImageType {
  url: string;
  height: number;
  width: number;
}

export interface contentsType {
  id: string;
  title_ja: string;
  title_en: string;
  kind: string;
  stack: string;
  mainImage: ImageType;
  description_ja: string;
  description_en: string;
  images: ImageType[];
  devUrl: string | undefined;
  videoUrl: string | undefined;
  GitUrl: string | undefined;
}
