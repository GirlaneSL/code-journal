'use client'

import { getProjects } from "@/lib/projects"
import type { Project } from "@code-journal/types"
import Link from "next/link"
import { useEffect, useState } from "react"

const ProjectsComponent = () => {
    const [projectsList, setProjecstList] = useState<Project[]>([])

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const data = await getProjects()
                setProjecstList(data)
            } catch (error) {

            }
        }
        fetchProjects()
    }, [])

    return (
        <div className="my-[34px]">
            {projectsList.map((project) => (
                <div key={project.githubUrl} className="content-entry flex">
                    <div className="flex flex-col gap-[10px]">
                        <h2 className="content-title">{project.name}</h2>
                        <p className="content-description">{project.description}</p>
                    </div>
                    <Link href={project.githubUrl} className="content-title-link text-[#2E4F8C] text-[12.5px]">github</Link>
                </div>
            ))}
        </div>
    )
}

export default ProjectsComponent