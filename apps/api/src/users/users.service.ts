import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service.js';

@Injectable()
export class UsersService {
    constructor(private readonly prisma: PrismaService) { }

    async findOne(email: string) {
        const user = await this.prisma.user.findUnique({
            where: {
                email,
            },
        });

        if (!user) throw new NotFoundException('User not found')

        return user
    }
}
