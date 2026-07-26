import { Module } from '@nestjs/common';
import { UsersService } from './users.service.js';
import { PrismaModule } from '../prisma.modules.js';

@Module({
  imports: [PrismaModule],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule { }
