const LoginComponent = () => {
        return (
            <div className="mx-auto mt-[60px] w-full max-w-[360px]">
                <div className="mb-7 text-center">
                    <p className="mb-2 font-mono text-[12px] uppercase tracking-[0.08em] text-[#83888F]">
                        Painel administrativo
                    </p>

                    <h1 className="font-display text-2xl font-semibold">
                        Entrar
                    </h1>
                </div>

                <form className="flex flex-col">
                    <div className="mb-[18px]">
                        <label htmlFor="email" className="label-login">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            className="input-login"
                            placeholder="seu email"
                        />
                    </div>

                    <div className="mb-[18px]">
                        <label htmlFor="password" className="label-login">
                            Senha
                        </label>
                        <input
                            id="password"
                            type="password"
                            className="input-login"
                            placeholder="••••••••"
                        />
                    </div>

                    <button className="w-full border border-[#1A1C21] bg-[#1A1C21] px-5 py-[11px] font-mono text-[13px] text-[#ECEDEE] hover:bg-[#2E4F8C] transition-colors duration-300">
                        Entrar
                    </button>
                </form>
            </div>
        );
    };

    export default LoginComponent;
