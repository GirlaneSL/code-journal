import type { Project } from "@code-journal/types";

export const getProjects = async (): Promise<Project[]> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`, {
        method: 'GET',
    })
    if (!response.ok) throw new Error()

    return response.json()
}