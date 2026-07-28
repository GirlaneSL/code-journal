export const login = async (email: string, password: string) => {
    const respose = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    })

    if (!respose.ok) throw new Error('Invalid credentials');

    return respose.json()
}