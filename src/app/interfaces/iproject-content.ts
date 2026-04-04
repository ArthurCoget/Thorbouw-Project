export interface IProjectImage {
  src: string;
  alt: string;
  title?: string;
  category?: string;
  description?: string;
}

export interface IProjectContent {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  location: string;
  year: number;
  cardImages: IProjectImage[];
  images: IProjectImage[];
}
