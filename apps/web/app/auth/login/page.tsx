'use client'

import { login } from "@/lib/auth";
import { SubmitEventHandler, useState } from "react";

const LoginComponent = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit: SubmitEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        setError(null);
        setIsLoading(true);

        try {
            const data = await login(email, password);
            localStorage.setItem('access_token', data.access_token);
            window.location.href = '/admin/articles/new'
        } catch (error) {
            setError('Incorrect email or password');
        } finally {
            setIsLoading(false);
        }
    }

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

            <form className="flex flex-col" onSubmit={handleSubmit}>
                <div className="mb-[18px]">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        className="form-input"
                        placeholder="seu email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-[18px]">
                    <label htmlFor="password" className="form-label">
                        Senha
                    </label>
                    <input
                        id="password"
                        type="password"
                        className="form-input"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
