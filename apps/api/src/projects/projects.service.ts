import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service.js';
import { CreateProjectDto } from './dto/create-project.dto.js';
import { Project } from 'generated/prisma/client.js';
import { UpdateProjectDto } from './dto/update-project.dto.js';

@Injectable()
export class ProjectsService {
    constructor(private readonly prisma: PrismaService) { }

    async create(createProjectDto: CreateProjectDto): Promise<Project> {
        return await this.prisma.project.create({
            data: createProjectDto,
        });
    };

    async findAll(): Promise<Project[]> {
        return await this.prisma.project.findMany()
    };

    async findOne(id: number): Promise<Project> {
        const project = await this.prisma.project.findUnique({
            where: { id }
        });

        if (!project) throw new NotFoundException('Resource not found');

        return project;
    };

    async update(
        id: number,
        updateProjectDto: UpdateProjectDto):
        Promise<Project> {
        return await this.prisma.project.update({
            where: { id },
            data: updateProjectDto
        });
    }

    async delete(id: number): Promise<Project> {
        return await this.prisma.project.delete({
            where: { id }
        });
    };

}
