'use client'

import { createArticle } from "@/lib/articles";
import { useRequiredAuth } from "@/lib/useAuth"
import { SubmitEventHandler, useState } from "react";

const page = () => {
  const isChecking = useRequiredAuth();
  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [content, setcontent] = useState('')

  if (isChecking) return null;

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()

    try {
      await createArticle(title, slug, excerpt, content)
    } catch (error) {

    }
  }

  return (
    <section className="block">
      <div className="px-[22px] max-w-[660px] sm:mx-auto pt-8">
        <div className="mb-[34px]">
          <div className="breadcrumb">
            <span>painel</span>
            <span>/</span>
            <span>editar artigo</span>
          </div>
          <div>
            <h2 className="initial-title">painel administrativo</h2>
            <h1 className="content-title mb-[22px]">Criar Artigo</h1>

            <form onSubmit={handleSubmit}>

              <label className="form-label" htmlFor="article-title">título</label>
              <input
                id="article-title"
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className="form-input"
              />
              <label className="form-label" htmlFor="article-slug">slug</label>
              <input
                id="article-slug"
                type="text"
                onChange={(e) => setSlug(e.target.value)}
                value={slug}
                className="form-input"
              />
              <label className="form-label" htmlFor="article-excerpt">resumo</label>
              <input
                id="article-excerpt"
                type="text"
                onChange={(e) => setExcerpt(e.target.value)}
                value={excerpt}
                className="form-input"
              />
              <label className="form-label" htmlFor="article-content">conteúdo</label>
              <textarea
                id="article-content"
                onChange={(e) => setcontent(e.target.value)}
                value={content}
                rows={10}
                className="form-input"
              />

              <button type="submit" className="font-mono text-[13px] tracking-[.03em] py-[11px] px-[20px] bg-[#181A1E] text-[#F6F6F2] text-center cursor-pointer hover:bg-[#2E4F8C] transition-colors duration-300">salvar</button>
            </form>
          </div>
        </div>
      </div>
    </section >
  )
}

export default page