import { Injectable } from '@nestjs/common';
import { UrlDto } from '../dtos/url.dto';


const database = {};
const baseUrl = 'http://localhost:3000/';

@Injectable()
export class EncodeService {
  async processUrls(urlDto: UrlDto): Promise<{ url: string }> {
    let code = this.checkIfExists(urlDto.url, database);
    if (code === null) {
      code = await this.encode(urlDto.url);
    }
    return {
      url: baseUrl + code,
    };
  }

  checkIfExists(url: string, db: object): any {
    let code = null;
    Object.values(db).forEach((value) => {
      if (value === url) {
        code = this.getKeyByValue(db, value);
      }
    });
    return code;
  }

  encode(url: string) {
    const randomString = Math.random().toString(36).substring(5);
    database[randomString] = url;
    return randomString;
  }

  getKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value);
  }
}