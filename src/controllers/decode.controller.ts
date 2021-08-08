import {
  Body,
  Controller,
  NotImplementedException,
  Post,
} from '@nestjs/common';
import { ShortenedUrlDto } from '../dtos/shortenedUrl.dto';
import { UrlDto } from '../dtos/Url.dto';

@Controller()
export class DecodeController {
  @Post('/decode')
  decode(@Body() shortenedUrlDto: ShortenedUrlDto): UrlDto {
    throw new NotImplementedException();
  }
}
