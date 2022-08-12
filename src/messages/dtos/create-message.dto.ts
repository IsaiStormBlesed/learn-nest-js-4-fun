import { IsString } from 'class-validator';

export class CreateMessage {
  @IsString()
  content: string;
}
