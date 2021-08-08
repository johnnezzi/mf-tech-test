import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UrlDto } from '../dtos/url.dto';

const database = {};
const baseUrl = 'http://localhost:3000/';

@Injectable()
export class EncodeService {
  async processUrls(urlDto: UrlDto): Promise<string> {
    let code = this.checkIfExists(urlDto.url, database);
    if (code === null) {
      code = await this.encode(urlDto.url);
    }
    return baseUrl + code;
  }

  checkIfExists(url: string, db: object): string {
    let code = null;
    Object.values(db).forEach((value) => {
      if (value === url) {
        code = this.getKeyByValue(db, value);
      }
    });
    return code;
  }

  encode(url: string): string {
    const randomString = Math.random().toString(36).substring(5);
    database[randomString] = url;
    return randomString;
  }

  async decode(shortUrl: string, db: object = database): Promise<string> {
    const getKey: string[] = shortUrl.split('/');
    const url: string = db[getKey[getKey.length - 1]];
    if (!url) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'URL provided could not be found',
        },
        HttpStatus.NOT_FOUND,
      );
    }

    return url;
  }

  getKeyByValue(object, value): string {
    return Object.keys(object).find((key) => object[key] === value);
  }

  redirect(shortenedUrl: string): string {
    const url: string = database[shortenedUrl];
    if (!url) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'URL provided could not be found',
        },
        HttpStatus.NOT_FOUND,
      );
    }
    return url;
  }
}
