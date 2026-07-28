import type { LoginResponse } from "@code-journal/types";

export const login = async (email: string, password: string): Promise<LoginResponse> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    })

    if (!response.ok) throw new Error('Invalid credentials');

    return response.json()
}