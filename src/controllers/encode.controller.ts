import {
  Body, Controller,
  Post,
} from '@nestjs/common';
import { UrlDto } from '../dtos/Url.dto';
import { EncodeService } from '../services/encode.service';

@Controller()
export class EncodeController {
  constructor(private encodeService: EncodeService) {}

  @Post('shrinkme/encode')

  async encode(@Body() urlDto: UrlDto) {
    const url = await this.encodeService.processUrls(urlDto);

    return {
      data: {
        url,
      },
    };
  }
}
