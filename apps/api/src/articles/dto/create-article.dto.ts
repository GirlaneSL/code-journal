import { IsNotEmpty, IsString } from "class-validator";

export class CreateArticleDto {
  @IsString()
  slug: string;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsString()
  content: string;

  @IsNotEmpty()
  excerpt: string;
}
