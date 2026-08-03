import { getArticleBySlug } from "@/lib/articles"
import { notFound } from "next/navigation"

interface Props {
    params: {
        slug: string
    }
}

const page = async ({ params }: Props) => {
    const { slug } = await params

    let article;

    try {
        article = await getArticleBySlug(slug)
        if (!article) {
        }
    } catch (error) {
        notFound()
    }

    return (
        <div className="px-[27px] max-w-[660px] sm:mx-auto">
            <div className="mb-[34px]">
                <div className="flex gap-2 font-mono text-[12px] text-[#83888F] mb-3 leading-[1.65]">
                    <span>blog</span>
                    <span>/</span>
                    <span>artigos</span>
                    <span>/</span>
                    <span>{article.slug}</span>
                </div>
                <div className="">
                    <h2 className="text-[#181A1E] text-[27px] sm:text-[34px] font-display tracking-[-.01em] font-semibold leading-[1.15] mb-[14px]">{article.title}</h2>
                    <p className="text-[#83888F] text-[12px]">{new Date(article.createdAt).toLocaleDateString('pt-BR')}</p>
                    <p className="text-[#181A1E] text-[18px] max-w-[58ch] font-body leading-[1.75]">{article.content}</p>
                </div>
            </div>
        </div>
    )
}

export default page