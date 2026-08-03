'use client'

import { getArticles } from "@/lib/articles"
import type { Article } from "@code-journal/types"
import Link from "next/link"
import { useEffect, useState } from "react"

const ArticleComponent = () => {
    const [savedArticles, setSavedArticless] = useState<Article[]>([])

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const data = await getArticles()
                setSavedArticless(data)
            } catch (error) {

            }
        }
        fetchArticles()
    }, [])

    return (
        <div className="my-[40px] ">
            {savedArticles.map((article) => (
                <div key={article.id} className="font-mono leading-[1.65] flex flex-col gap-2">
                    <p className="text-[#83888F] text-[12px]">{new Date(article.createdAt).toLocaleDateString('pt-BR')}</p>
                    <Link href={`/articles/${article.slug}`}>
                        <h2 className="text-[#181A1E] text-[22px] font-display tracking-[-.01em] font-semibold hover:text-[#2E4F8C] hover:underline hover:underline-offset-3">{article.title}</h2>
                    </Link>
                    <p className="text-[#4A4F57] text-[16px] max-w-[58ch] font-body">{article.excerpt}</p>
                </div>
            ))}
        </div>
    )
}

export default ArticleComponent
