'use client'

import { getArticles } from "@/lib/articles"
import type { Article } from "@code-journal/types"
import Link from "next/link"
import { useEffect, useState } from "react"

const ArticleComponent = () => {
    const [articlesList, setArticlesList] = useState<Article[]>([])

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const data = await getArticles()
                setArticlesList(data)
            } catch (error) {

            }
        }
        fetchArticles()
    }, [])

    return (
        <div>
            {articlesList.map((article) => (
                <div key={article.id} className="content-entry flex flex-col gap-2 border-b border-b-[#E9E9E2] py-[26px]">
                    <p className="text-[#83888F] text-[12px]">{new Date(article.createdAt).toLocaleDateString('pt-BR')}</p>
                    <Link href={`/articles/${article.slug}`}>
                        <h2 className="content-title content-title-link">{article.title}</h2>
                    </Link>
                    <p className="content-description">{article.excerpt}</p>
                </div>
            ))}
        </div>
    )
}

export default ArticleComponent
