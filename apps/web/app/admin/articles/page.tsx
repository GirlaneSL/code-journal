'use client'

import AdmPainelComponent from "@/app/components/AdmPainelComponent"
import { deleteArticle, getArticles } from "@/lib/articles"
import { Article } from "@code-journal/types"
import Link from "next/link"
import { useEffect, useState } from "react"

const page = () => {
    const [articlesList, setArticlesList] = useState<Article[]>([])

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const data = await getArticles()
                console.log('ARTIGOS:', data)

                setArticlesList(data)
            } catch (error) {
                console.error('ERRO AO BUSCAR ARTIGOS:', error)

            }
        }
        fetchArticles()
    }, [])

    const handleDelete = async (id: number) => {
        try {
            await deleteArticle(id)
            setArticlesList(prev =>
                prev.filter(article => article.id !== id)
            )
        } catch (error) {
            console.error('Erro ao excluir artigo:', error)
        }
    }

    const handleUpdate = async () => {

    }

    return (
        <section className="block">
            <div>

                <AdmPainelComponent>
                    <div className="mb-[30px] flex flex-wrap justify-between gap-4 items-end">
                        <h1 className="content-title !mb-0">Meus artigos</h1>
                        <Link href={'/admin/articles/new'} className="btn">+ novo artigo
                        </Link>
                    </div>

                    <div className="flex gap-[22px] font-mono text-[12.5px] mb-7 border-b border-[#DEDED6]">
                        <button className="relative py-[9px] px-[0px] text-[#181A1E] cursor-pointer font-mono text-[13px] after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-px after:h-[2px] after:bg-[#2E4F8C]">artigos</button>

                    </div>

                    <div className="flex gap-2 mb-[22px]">
                        <button className="border border-[#181A1E] text-[#F6F6F2] bg-[#181A1E] px-3 py-[5px] font-mono text-[12px] cursor-pointer">todos · {articlesList.length}</button>
                    </div>

                    <ul>
                        {articlesList.map(article => (
                            <li key={article.id} className="flex flex-col justify-between gap-[14px]  py-4 border-b border-[#E9E9E2]">
                                <div className="flex flex-col gap-[6px]">
                                    <div className="font-mono text-[11.5px] text-[#83888F] flex gap-2 items-center flex-wrap">
                                        <span className="font-mono text-[11px] tracking-[0.04em] px-2 py-0.5 border border-[#2E4F8C] text-[#2E4F8C] inline-block whitespace-nowrap">[ publicado ]</span>
                                        <span>{new Date(article.createdAt).toLocaleDateString('pt-BR')}</span>
                                    </div>

                                    <button className="text-[16px] font-semibold text-[#181A1E] hover:text-[#2E4F8C] text-left cursor-pointer">{article.title}</button>
                                </div>

                                <div className="flex gap-2 font-mono text-xs">
                                    <button
                                        className="button-actions">editar</button>
                                    <button
                                        onClick={() => handleDelete(article.id)}
                                        className="button-actions">excluir</button>
                                </div>

                            </li>
                        ))}
                    </ul>
                </AdmPainelComponent>
            </div>
        </section>
    )
}

export default page