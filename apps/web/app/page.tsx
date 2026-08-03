import ArticleComponent from "./components/ArticlesComponent";

export default function Home() {
  return (
    <div className="p-[22px] flex flex-col mx-auto max-w-[660px] px-[22px]">
      <div className="">
        <h1 className="initial-title">notas de engenharia</h1>
        <p className="initial-paragraph">Registro decisões de arquitetura, o motivo por trás delas e os bastidores dos projetos que construo — sem pular a parte de errar o caminho antes de acertar.</p>
      </div>
      <ArticleComponent />
    </div>
  );
}
