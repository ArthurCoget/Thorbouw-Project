import { Injectable } from '@angular/core';
import { ISnakeContent, ISnakeImage, ISnakeItem } from '../interfaces/snake-image-interface';

@Injectable({
  providedIn: 'root',
})
export class SnakeService {
  snakeBuilder(images: ISnakeImage[], text: ISnakeContent[]): ISnakeItem[] {
    const items: ISnakeItem[] = [];

    let imageId = 0;
    let textId = 0;
    let step = 0;

    while (true) {
      const isHorizontal = step % 2 === 1;

      if (!isHorizontal) {
        if (imageId >= images.length || textId + 1 >= text.length) break;
        items.push({
          type: 'vertical',
          imageLeft: step % 4 === 2,
          mainImage: images[imageId++],
          texts: [text[textId++], text[textId++]],
          alternativeColor: false,
        });
      } else {
        if (imageId + 1 >= images.length || textId >= text.length) break;

        items.push({
          type: 'horizontal',
          imageLeft: step % 4 === 3,
          mainImage: images[imageId++],
          secondaryImage: images[imageId++],
          texts: [text[textId++]],
          alternativeColor: true,
        });
      }

      step++;
    }

    return items;
  }
}
