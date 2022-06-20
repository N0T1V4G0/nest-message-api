import { IsString, Length } from 'class-validator';

export class CreateMessageDTO {
  @IsString()
  @Length(1, 1000)
  content: string;
}
