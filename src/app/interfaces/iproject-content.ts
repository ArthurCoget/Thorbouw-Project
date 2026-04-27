import { off } from 'process';

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
  locationCoord: [number, number];
  year: number;
  cardImages: IProjectImage[];
  images: IProjectImage[];
  offset?: number;
}

export function createImages(
  start: number,
  end: number,
  basePath: string,
  alt: string,
  options: {
    category?: string;
    title?: string;
    description?: string;
    prefix: string;
  },
): IProjectImage[] {
  return Array.from({ length: end - start + 1 }, (_, i) => ({
    src: `${basePath}/${options.prefix}_${start + i}.webp`,
    alt: alt,
    category: options.category,
    ...(options.title && { title: options.title }),
    ...(options.description && { description: options.description }),
  }));
}
