export interface ISnakeImage {
  src: string;
  alt: string;
}

export interface ISnakeContent {
  title: string;
  subtitle: string;
}

export interface ISnakeItem {
  type: 'vertical' | 'horizontal';
  mainImage: ISnakeImage;
  secondaryImage?: ISnakeImage;
  texts: ISnakeContent[];
  imageLeft: boolean;
  alternativeColor: boolean;
}
