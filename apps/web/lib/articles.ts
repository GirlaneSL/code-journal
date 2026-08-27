import type { Article } from "@code-journal/types";

export const getArticles = async (): Promise<Article[]> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/articles`, {
        method: 'GET',
    })
    if (!response.ok) throw new Error('Failed to get articles')

    return response.json();
}

export const getArticleBySlug = async (slug: string): Promise<Article> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/articles/${slug}`, {
        method: 'GET',
    })
    if (!response.ok) throw new Error('Failed to get article')

    return response.json();
}

export const createArticle = async (title: string, slug: string, excerpt: string, content: string): Promise<Article> => {
    const token = localStorage.getItem('access_token');

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/articles`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title, slug, excerpt, content })
    });

    if (!response.ok) throw new Error('Failed to create article')

    return response.json();
}

export const deleteArticle = async (id: number): Promise<void> => {
    const token = localStorage.getItem('access_token');

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/articles/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    });

    if (!response.ok) throw new Error('Failed to delete article')

}