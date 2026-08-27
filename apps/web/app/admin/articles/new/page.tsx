'use client'

import AdmPainelComponent from "@/app/components/AdmPainelComponent";
import ArticleFormComponent from "@/app/components/ArticleFormComponent";
import { createArticle } from "@/lib/articles";
import { useRequiredAuth } from "@/lib/useAuth";

const page = () => {
  const isChecking = useRequiredAuth();
  if (isChecking) return null;

  return (
    <section className="block">
      <AdmPainelComponent>
        <h1 className="content-title mb-[22px]">Criar Artigo</h1>
        <ArticleFormComponent
          submitLabel="salvar"
          onSubmit={async (title, slug, excerpt, content) => {
            await createArticle(title, slug, excerpt, content)
          }}
        />

      </AdmPainelComponent>
    </section >
  )
}

export default page