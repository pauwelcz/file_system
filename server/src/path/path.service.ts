import { BadRequestException, Injectable } from '@nestjs/common';
import { Item } from './dto/content.output';
import { promises as fs } from 'fs';
import * as path from 'path';

@Injectable()
export class PathService {
  async getContent(pathName: string): Promise<Item[]> {
    try {
      const content = await fs.readdir(path.join('/', pathName), {
        withFileTypes: true,
      });

      const contentObject: Item[] = content.map((item) => {
        return {
          name: item.name,
          isDirectory: !item.isFile(),
        };
      });

      return contentObject;
    } catch (error) {
      throw new BadRequestException(`Path ${pathName} does not exists.`);
    }
  }
}
