export interface TextImageBlock {
  subtitle: string;
  description: string;
}

export interface TextImageContent {
  id: string;
  title: string;
  image: string;
  imageAlt: string;
  blocks: TextImageBlock[];
}
