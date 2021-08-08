import { Injectable } from '@nestjs/common';
import { UrlDto } from '../../../nestjs copy/src/dtos/url.dto';

const obj = {};
const baseUrl = 'http://localhost:3000/';

@Injectable()
export class EncodeService {
  async processUrls(urlDto: UrlDto): Promise<{ url: string }> {
    const code = this.checkIfExists(urlDto.url);
    // if not encodes a url
    // returns a url in json object
    return {
      url: baseUrl + code,
    };
  }

  checkIfExists(url: string): any {
    return url;
  }
}