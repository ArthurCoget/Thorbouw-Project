export interface IProjectImage {
  src: string;
  alt: string;
}

export interface IProjectContent {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  location: string;
  year: number;
  cardImage: string;
  cardImageAlt: string;
  cardImage2: string;
  cardImage3: string;
  images: IProjectImage[];
}
