export interface ITextRouselContent {
  id: number;
  title: string;
  description: string;
}

export function getRouselById(
  content: ITextRouselContent[],
  id: number,
): ITextRouselContent | undefined {
  return content.find((value: ITextRouselContent) => value.id === id);
}
