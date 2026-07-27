import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto.js';
import { Article } from '../../generated/prisma/client.js';
import { ArticlesService } from './articles.service.js';
import { UpdateArticleDto } from './dto/update-article.dto.js';
import { AuthGuard } from '../auth/guards/auth.guard.js';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) { }

  @UseGuards(AuthGuard)
  @Post()
  async create(@Body() createArticleDto: CreateArticleDto): Promise<Article> {
    return this.articlesService.create(createArticleDto);
  }

  @Get()
  async findAll(): Promise<Article[]> {
    return this.articlesService.findAll();
  }

  @Get(':slug')
  async findOneSlug(@Param('slug') slug: string): Promise<Article> {
    return this.articlesService.findOneSlug(slug);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateArticleDto: UpdateArticleDto,
  ): Promise<Article> {
    return this.articlesService.update(parseInt(id), updateArticleDto);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Article> {
    return this.articlesService.delete(parseInt(id));
  }
}
