import { Module } from '@nestjs/common';
import { ArticlesService } from './articles.service.js';
import { ArticlesController } from './articles.controller.js';
import { PrismaModule } from '../prisma.modules.js';

@Module({
  imports: [PrismaModule],
  providers: [ArticlesService],
  controllers: [ArticlesController],
})
export class ArticlesModule {}
