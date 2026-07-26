import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto.js';
import { PrismaService } from '../prisma.service.js';
import { Article } from '../../generated/prisma/client.js';
import { UpdateArticleDto } from './dto/update-article.dto.js';

@Injectable()
export class ArticlesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createArticleDto: CreateArticleDto): Promise<Article> {
    return this.prisma.article.create({
      data: createArticleDto,
    });
  }

  async findAll(): Promise<Article[]> {
    return this.prisma.article.findMany();
  }

  async findOne(slug: string): Promise<Article | null> {
    return this.prisma.article.findUnique({
      where: { slug },
    });
  }

  async update(
    id: number,
    updateArticleDto: UpdateArticleDto,
  ): Promise<Article> {
    return this.prisma.article.update({
      where: { id },
      data: updateArticleDto,
    });
  }

  async delete(id: number): Promise<Article> {
    return this.prisma.article.delete({
      where: { id },
    });
  }
}
