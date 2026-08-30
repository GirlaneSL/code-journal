'use client'

import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react";

const ScreenSelect = () => {
    const router = useRouter()
    const pathname = usePathname()
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        setIsAuthenticated(!!localStorage.getItem('access_token'))
    }, [])

    const isArticle = pathname.startsWith('/articles/')
    const isEditArticle = pathname.startsWith('/admin/articles/edit/')

    const articleSlug = isArticle
        ? pathname.split('/')[2]
        : isEditArticle
            ? pathname.split('/')[4]
            : null


    let screens = [
        { name: 'home', path: '/' },
        { name: 'projetos', path: '/projects' },
        { name: 'sobre', path: '/about' },
        { name: 'admin · login', path: '/auth/login' },
    ]

    if (isAuthenticated) {
        screens = [
            ...screens,
            { name: 'admin · novo artigo', path: '/admin/articles/new' },
            { name: 'admin · artigos', path: '/admin/articles' },
            ...(articleSlug
                ? [{
                    name: 'admin · editar', path: `/admin/articles/edit/${articleSlug}`
                }]
                :
                []
            )
        ]
    }

    return (
        <select
            value={pathname}
            onChange={(e) => router.push(e.target.value)}
            id="screen-select"
            className='bg-[#1B1D22] w-auto py-[7px] px-2 border border-[#3A3E46] rounded-[5px] font-mono  text-[#E4E5E7] text-[12px] cursor-pointer lowercase outline-none'>
            {screens.map((screen) => (
                <option key={screen.path} value={screen.path}>
                    {screen.name}
                </option>
            ))}
            {isArticle && (
                <option value={pathname}>artigo</option>
            )}
        </select>
    )
}

export default ScreenSelect