import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ProjectsService } from './projects.service.js';
import { CreateProjectDto } from './dto/create-project.dto.js';
import { Project } from 'generated/prisma/client.js';
import { UpdateProjectDto } from './dto/update-project.dto.js';
import { AuthGuard } from '../auth/guards/auth.guard.js';

@Controller('projects')
export class ProjectsController {
    constructor(private readonly projectsService: ProjectsService) { }

    @Post()
    async create(@Body() createProjectDto: CreateProjectDto): Promise<Project> {
        return this.projectsService.create(createProjectDto);
    };

    @Get()
    async findAll(): Promise<Project[]> {
        return this.projectsService.findAll()
    };

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Project> {
        return this.projectsService.findOne(parseInt(id))
    };

    @UseGuards(AuthGuard)
    @Patch(':id')
    async update(
        @Param('id') id: string,
        @Body() updateProjectDto: UpdateProjectDto,
    ): Promise<Project> {
        return this.projectsService.update(parseInt(id), updateProjectDto)
    };

    @UseGuards(AuthGuard)
    @Delete(':id')
    async delete(@Param('id') id: string): Promise<Project> {
        return this.projectsService.delete(parseInt(id))
    };
}
