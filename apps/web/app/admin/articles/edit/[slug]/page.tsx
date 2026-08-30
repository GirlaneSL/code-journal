import AdmPainelComponent from "@/app/components/AdmPainelComponent";
import ArticleEditClient from "@/app/components/ArticleEditClient";
import { getArticleBySlug } from "@/lib/articles";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

const page = async ({ params }: Props) => {

  const { slug } = await params

  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <section className="block">
      <div className="container px-[22px] sm:mx-auto pt-8">
        <AdmPainelComponent>
          <h1 className="content-title mb-[22px]">Editar Artigo</h1>
          <ArticleEditClient
            articleId={article.id}
            initialContent={article.content}
            initialExcerpt={article.excerpt}
            initialSlug={article.slug}
            initialTitle={article.title}
          />
        </AdmPainelComponent>
      </div>
    </section>
  )
}

export default page