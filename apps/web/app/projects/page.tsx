import ProjectsComponent from "../components/ProjectsComponent";

const page = () => {
    return (
        <div className="p-[22px] flex flex-col mx-auto max-w-[660px] px-[22px]">
            <div className="">
                <h1 className="initial-title">projetos</h1>
                <p className="initial-paragraph">Projetos que refletem meu processo de evolução, explorando diferentes ideias e construindo soluções com atenção aos detalhes.</p>
            </div>
            <ProjectsComponent />
        </div>
    );
}


export default page