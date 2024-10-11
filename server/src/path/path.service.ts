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
        const isDirectory = !item.isFile();
        return {
          name: item.name,
          isDirectory,
          extension: this.getExtension(item.name, isDirectory),
        };
      });

      return contentObject;
    } catch (error) {
      throw new BadRequestException(`Path ${pathName} does not exists.`);
    }
  }

  private getExtension(name: string, isDirectory: boolean) {
    const splitted = name.split('.');
    return isDirectory ? null : splitted[splitted.length - 1];
  }
}
