'use client'

import { updateArticle } from "@/lib/articles";
import { useRequiredAuth } from "@/lib/useAuth";
import { useRouter } from "next/navigation";
import ArticleFormComponent from "./ArticleFormComponent";

type Props = {
    articleId: number;
    initialContent: string;
    initialSlug: string;
    initialExcerpt: string;
    initialTitle: string;
};

const ArticleEditClient = ({
    articleId,
    initialContent,
    initialSlug,
    initialExcerpt,
    initialTitle, }: Props) => {

    const isChecking = useRequiredAuth();
    const router = useRouter()

    if (isChecking) return null;

    const handleSubmit = async (
        title: string,
        slug: string,
        excerpt: string,
        content: string
    ) => {
        await updateArticle(
            articleId,
            title,
            slug,
            excerpt,
            content
        )
        router.push(`/admin/articles/edit/${slug}`)
    }

    return (
        <div>
            <ArticleFormComponent
                submitLabel="editar"
                initialContent={initialContent}
                initialSlug={initialSlug}
                initialExcerpt={initialExcerpt}
                initialTitle={initialTitle}
                onSubmit={handleSubmit}
            />
        </div>
    )
}

export default ArticleEditClient