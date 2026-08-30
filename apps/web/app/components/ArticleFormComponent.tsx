'use client'

import { SubmitEventHandler, useState } from "react";

type ArticleFormProps = {
    initialTitle?: string;
    initialSlug?: string;
    initialExcerpt?: string;
    initialContent?: string;
    submitLabel?: string;
    onSubmit: (
        title: string,
        slug: string,
        excerpt: string,
        content: string,
    ) => Promise<void>;
}

const ArticleFormComponent = ({
    initialTitle = '',
    initialSlug = '',
    initialExcerpt = '',
    initialContent = '',
    submitLabel = 'salvar',
    onSubmit,
}: ArticleFormProps) => {
    const [title, setTitle] = useState(initialTitle)
    const [slug, setSlug] = useState(initialSlug)
    const [excerpt, setExcerpt] = useState(initialExcerpt)
    const [content, setContent] = useState(initialContent)

    const handleSubmit: SubmitEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault()

        await onSubmit(title, slug, excerpt, content)
    }

    return (
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
                onChange={(e) => setContent(e.target.value)}
                value={content}
                rows={10}
                className="form-input"
            />

            <button type="submit" className="btn">{submitLabel}</button>
        </form>
    )
}

export default ArticleFormComponent