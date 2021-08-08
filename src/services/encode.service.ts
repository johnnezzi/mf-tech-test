import { Injectable } from '@nestjs/common';
import { UrlDto } from '../../../nestjs copy/src/dtos/url.dto';

const obj = {};
const baseUrl = 'http://localhost:3000/';

@Injectable()
export class EncodeService {
  async processUrls(urlDto: UrlDto): Promise<{ url: string }> {
    let code = this.checkIfExists(urlDto.url);
    if (code === null) {
      code = await this.encode(urlDto.url);
    }
    return {
      url: baseUrl + code,
    };
  }

  checkIfExists(url: string): any {
    return url;
  }

  encode(url: string) {
    return url
  }
}