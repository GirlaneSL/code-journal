'use client'

import { getArticles } from "@/lib/articles"
import type { Article } from "@code-journal/types"
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
                    <h2 className="text-[#181A1E] text-[22px] font-display tracking-[-.01em] font-semibold">{article.title}</h2>
                    <p className="text-[#4A4F57] text-[16px] max-w-[58ch] font-body">{article.excerpt}</p>
                </div>
            ))}
        </div>
    )
}

export default ArticleComponent

// cada item da lista:
//   data · tempo leitura    mono 12px, cor metadado
//   badge status             ver seção BADGES
//   título                   22px Space Grotesk 600, cor texto principal (hover: azul)
//   resumo                   16px serifada, cor texto secundário
//   tags                     ver seção TAGS
//   separador                linha 1px cor borda fraca, 26px de respiro acima/abaixo