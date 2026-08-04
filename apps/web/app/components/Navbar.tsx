import Link from "next/link"

const Navbar = () => {
    return (
        <header className="border-b border-b-[#DEDEd6]">
            <div className="px-[18px] pb-[14px] pt-[18px] flex flex-col gap-[8px] max-w-[660px] font-mono text-[15px] leading-[1.65]  sm:mx-auto sm:px-[22px] sm:pt-[26px] sm:pb-[20px] sm:flex-row sm:justify-between sm:items-center">
                <span className="text-[#181A1E] font-semibold">blog/</span>
                <nav className="flex gap-3 sm:flex-wrap">
                    <Link className="nav-link" href={'/'}>artigos</Link>
                    <Link className="nav-link" href={'/projects'}>projetos</Link>
                    <Link className="nav-link" href={'/about'}>sobre</Link>
                </nav>
            </div>
        </header>
    )
}

export default Navbar
