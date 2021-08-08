import {
  Body,
  Controller,
  NotImplementedException,
  Post,
} from '@nestjs/common';
import { ShortenedUrlDto } from '../dtos/shortenedUrl.dto';
import { UrlDto } from '../dtos/Url.dto';

@Controller()
export class EncodeController {
  @Post('/encode')
  encode(@Body() urlDto: UrlDto): ShortenedUrlDto {
    throw new NotImplementedException();
  }
}
