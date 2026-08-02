import ScreenSelect from "./ScreenSelect"

const PreviewControls = () => {
    return (
        <div className="bg-[#101216]/94 fixed bottom-2.5 right-2.5 left-2.5 sm:left-auto sm:right-4 sm:bottom-4 px-3 py-[13px] sm:min-w-[196px] border border-[#34373d] rounded-[9px] font-mono shadow-[0_10px_28px_rgba(0,0,0,.35)]">
            <div className="flex items-center gap-[5px]">
                <div className="rounded-full bg-[#5C8CD6] w-[5px] h-[5px]"></div>
                <div>
                    <p className="text-[#6d7178] text-[9px] tracking-[.14em] uppercase leading-[1.65]">Preview do mockup</p>
                </div>
            </div>
            <ScreenSelect />
        </div>
    )
}

export default PreviewControls