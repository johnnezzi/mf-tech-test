import { IsString } from 'class-validator';

export class ResponseRto {
  @IsString()
  data: { url: string };
}
