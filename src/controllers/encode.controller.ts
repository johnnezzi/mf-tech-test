import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Redirect,
  UsePipes,
} from '@nestjs/common';
import { EncodeService } from '../services/encode.service';
import { ValidationPipe } from '../shared/validation.pipe';
import { ShortenedUrlDto } from '../dtos/shortenedUrl.dto';
import { ResponseRto } from '../rtos/response.rto';
import { UrlDto } from '../dtos/url.dto';

@Controller()
export class EncodeController {
  constructor(private encodeService: EncodeService) {}

  @Post('shrinkme/encode')
  @UsePipes(new ValidationPipe())
  async encode(@Body() urlDto: UrlDto): Promise<ResponseRto> {
    const url: string = await this.encodeService.processUrls(urlDto);
    return {
      data: {
        url,
      },
    };
  }

  @Post('shrinkme/decode')
  @UsePipes(new ValidationPipe())
  async decode(@Body() urlDto: ShortenedUrlDto): Promise<ResponseRto> {
    const url: string = await this.encodeService.decode(urlDto.shortenedUrl);
    return {
      data: {
        url,
      },
    };
  }

  @Get('/:code')
  @Redirect()
  async redirect(@Param('code') code) {
    const url = this.encodeService.redirect(code);
    return { url: url, statusCode: 303 };
  }
}
