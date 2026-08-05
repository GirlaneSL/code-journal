'use client'

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export const useRequiredAuth = () => {
    const router = useRouter()
    const [isChecking, setIsChecking] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('access_token');

        if (!token) {
            router.push('/');
            return
        }

        setIsChecking(false);
    }, [router])

    return isChecking;
}
