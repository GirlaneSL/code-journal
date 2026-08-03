import ArticleComponent from "./components/ArticlesComponent";

export default function Home() {
  return (
    <div className="p-[22px] flex flex-col mx-auto max-w-[660px] px-[22px]">
      <div className="">
        <h1 className="text-[#83888F] uppercase font-mono text-xs mb-[10px] leading-[1.65]">notas de engenharia</h1>
        <p className="text-[#4A4F57] font-body text-[17px] sm:text-[19px] max-w-[52ch] mb-[6px] leading-[1.65]">Registro decisões de arquitetura, o motivo por trás delas e os bastidores dos projetos que construo — sem pular a parte de errar o caminho antes de acertar.</p>
      </div>
      <ArticleComponent />
    </div>
  );
}
