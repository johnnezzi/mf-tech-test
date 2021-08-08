import {
  Body, Controller,
  Post,
} from '@nestjs/common';
import { UrlDto } from '../dtos/Url.dto';
import { EncodeService } from '../../../nestjs copy/src/services/encode.service';

@Controller()
export class EncodeController {
  constructor(private encodeService: EncodeService) {}

  @Post('shrinkme/encode')
  async encode(@Body() urlDto: UrlDto) {
    return await this.encodeService.processUrls(urlDto);
  }
}
