import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service.js';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findOne(email: string) {
    return this.prisma.user.findUnique({
      where: {
        email,
      },
    });
  }
}
