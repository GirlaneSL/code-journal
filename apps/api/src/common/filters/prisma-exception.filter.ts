import { ArgumentsHost, Catch, ConflictException, NotFoundException } from "@nestjs/common";
import { BaseExceptionFilter } from "@nestjs/core";
import { Prisma } from "../../../generated/prisma/client.js";

@Catch()
export class PrismaExceptionFilter extends BaseExceptionFilter {
    catch(exception: unknown, host: ArgumentsHost) {
        if (exception instanceof Prisma.PrismaClientKnownRequestError) {
            switch (exception.code) {
                case 'P2002':
                    return super.catch(
                        new ConflictException('Resource already exists'),
                        host,
                    );

                case 'P2025':
                    return super.catch(
                        new NotFoundException('Resource not found'),
                        host,
                    );
            }
        }
        return super.catch(exception, host)
    }
}
