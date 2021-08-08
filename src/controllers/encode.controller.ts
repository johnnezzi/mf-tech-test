import {
  Body,
  Controller,
  Post,
  UsePipes,
} from '@nestjs/common';
import { UrlDto } from '../dtos/Url.dto';
import { EncodeService } from '../services/encode.service';
import { ValidationPipe } from '../shared/validation.pipe';
@Controller()
export class EncodeController {
  constructor(private encodeService: EncodeService) {}

  @Post('shrinkme/encode')
  @UsePipes(new ValidationPipe())
  async encode(@Body() urlDto: UrlDto) {
    const url = await this.encodeService.processUrls(urlDto);
    return {
      data: {
        url,
      },
    };
  }

  @Post('shrinkme/decode')
  @UsePipes(new ValidationPipe())
  async decode(@Body() urlDto: UrlDto) {
    const url = await this.encodeService.decode(urlDto.url);
    return {
      data: {
        url,
      },
    };
  }
}
