const SideText = () => {
    return (
        <div className="fixed left-[42px] top-[130px] bottom-[56px] hidden lg:flex flex-col items-center gap-4 z-[4] pointer-events-none">
            <span className="uppercase text-[#83888F] text-[10px] tracking-[0.2em] [writing-mode:vertical-rl] rotate-180 font-mono whitespace-nowrap">
                Notas de arquitetura e backend
            </span>

            <span className="w-px flex-1 bg-[#DEDED6]" />
        </div>
    )
}

export default SideText