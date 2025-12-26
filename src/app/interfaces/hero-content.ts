interface IHeroBase {
  image: string;
  title: string;
  altText: string;
}

export interface ISimpleHero extends IHeroBase {
  variant: 'simple';
}

export interface ICompleteHero extends IHeroBase {
  variant: 'complete';
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

export type IHeroContent = ISimpleHero | ICompleteHero;

export function isCompleteHero(content: IHeroContent): content is ICompleteHero {
  return content.variant === 'complete';
}
