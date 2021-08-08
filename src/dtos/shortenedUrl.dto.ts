import { IsString } from 'class-validator';

export class ShortenedUrlDto {
  @IsString()
  shortenedUrl: string;
}
