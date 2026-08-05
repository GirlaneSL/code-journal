import ProjectsComponent from "../components/ProjectsComponent";

const page = () => {
    return (
        <section className="block">
            <div className="container pt-[32px] sm:pt-[44px] flex flex-col mx-auto px-[22px]">
                <div>
                    <h1 className="initial-title">projetos</h1>
                    <p className="initial-paragraph">
                        Projetos que refletem meu processo de evolução, explorando diferentes ideias e construindo soluções com atenção aos detalhes.
                    </p>
                </div>
                <ProjectsComponent />
            </div>
        </section>
    );
};

export default page;