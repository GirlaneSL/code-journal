import Link from "next/link"

const page = () => {
    return (
        <section className="block">
            <div className="pt-[32px] sm:pt-[44px] flex flex-col mx-auto max-w-[660px] px-[22px]">
                <div>
                    <p className="initial-title">sobre</p>
                    <h1 className="content-title mb-[22px]">Girlane da Silva Lima</h1>
                    <p className="initial-paragraph">
                        Desenvolvedora backend com foco em Node.js e NestJS. Gosto de arquitetura, documentação e de tratar decisões técnicas como algo que vale a pena registrar.
                    </p>
                </div>
                <div>
                    <h2 className="about-titles">stack</h2>
                    <div className="flex flex-wrap gap-[6px]">
                        <span className="tag">#nodejs</span>
                        <span className="tag">#nestjs</span>
                        <span className="tag">#nextjs</span>
                        <span className="tag">#typescript</span>
                        <span className="tag">#postgresql</span>
                        <span className="tag">#prisma</span>
                    </div>
                </div>
                <div className="mb-[30px]">
                    <h2 className="about-titles">links</h2>

                    <ul>
                        <li className="link-list">
                            <span className="list-item">github</span>
                            <a
                                className="link-item"
                                href="https://github.com/girlanesl"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                /girlaneSL
                            </a>
                        </li>

                        <li className="link-list">
                            <span className="list-item">linkedin</span>
                            <a
                                className="link-item"
                                href="https://www.linkedin.com/in/seu-usuario"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                /in/user
                            </a>
                        </li>

                        <li className="link-list">
                            <span className="list-item">email</span>
                            <a
                                className="link-item"
                                href="mailto:girla10nelima@gmail.com"
                            >
                                girla10nelima@gmail.com
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default page
