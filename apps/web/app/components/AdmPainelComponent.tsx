import React from "react"

type Props = {
    children: React.ReactNode
}

const AdmPainelComponent = ({ children }: Props) => {
    return (
        <div className="container px-[22px] sm:mx-auto pt-8">
            <div className="mb-[34px]">
                <div>
                    <h2 className="initial-title">painel administrativo</h2>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default AdmPainelComponent