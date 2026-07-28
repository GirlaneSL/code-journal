import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dto/login.dto.js';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service.js';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService,
    ) { }

    async login(loginDto: LoginDto): Promise<{ access_token: string }> {
        const user = await this.usersService.findOne(loginDto.email).catch((error) => {
            if (error instanceof NotFoundException) return null;
            throw error
        });

        if (!user || user.passwordHash !== loginDto.password) {
            throw new UnauthorizedException('Access denied');
        }

        const payload = { sub: user.id, email: user.email };

        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }
}
