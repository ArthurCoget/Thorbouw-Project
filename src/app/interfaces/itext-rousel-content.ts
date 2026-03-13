export interface ITextRouselContent {
  id: number;
  title: string;
  description: string;
  svg: string;
}

export function getRouselById(
  content: ITextRouselContent[],
  id: number,
): ITextRouselContent | undefined {
  return content.find((value: ITextRouselContent) => value.id === id);
}
