'use client'

import { SubmitEventHandler, useState } from "react";
import ReactMarkdown from 'react-markdown';

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
    const [toggleButton, setToggleButton] = useState(false)

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

            <div className="mb-5 flex flex-col">
                <div className="mb-2 flex gap-1">
                    <button
                        type="button"
                        onClick={() => setToggleButton(false)}
                        className={
                            toggleButton ?
                                "py-[6px] px-4 border border-[#DEDEd6] bg-[#FCFCFA] font-mono text-[13px] text-[#4A4F57] cursor-pointer tracking-[.03em]"
                                :
                                "py-[6px] px-4 border border-[#1A1C21] bg-[#1A1C21] font-mono text-[13px] text-[#ECEDEE] cursor-pointer tracking-[.03em]"
                        }
                    >markdown</button>
                    <button
                        type="button"
                        onClick={() => setToggleButton(true)}
                        className={
                            !toggleButton ?
                                "py-[6px] px-4 border border-[#DEDEd6] bg-[#FCFCFA] font-mono text-[13px] text-[#4A4F57] cursor-pointer tracking-[.03em]"
                                :
                                "py-[6px] px-4 border border-[#1A1C21] bg-[#1A1C21] font-mono text-[13px] text-[#ECEDEE] cursor-pointer tracking-[.03em]"
                        }
                    >preview</button>
                </div>
                
                {!toggleButton ? (
                    <textarea
                        id="article-content"
                        onChange={(e) => setContent(e.target.value)}
                        value={content}
                        className="form-input !mb-0 block min-h-[250px] resize-y"
                    />
                ) : (
                    <div className="form-input !mb-0 block min-h-[250px] overflow-y-auto">
                        <div className="prose max-w-none">
                            <ReactMarkdown>{content}</ReactMarkdown>
                        </div>
                    </div>
                )}
            </div>

            <button type="submit" className="btn">{submitLabel}</button>
        </form>
    )
}

export default ArticleFormComponent