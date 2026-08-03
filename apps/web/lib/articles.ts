import type { Article } from "@code-journal/types";

export const getArticles = async (): Promise<Article[]> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/articles`, {
        method: 'GET',
    })
    if (!response.ok) throw new Error()

    return response.json()
}

export const getArticleBySlug = async (slug: string): Promise<Article> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/articles/${slug}`, {
        method: 'GET',
    })
    if (!response.ok) throw new Error()

    return response.json()
}