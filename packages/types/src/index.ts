export interface Article {
    id: number;
    slug: string;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface User {
    id: number;
    email: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface AuthPayload {
    sub: number;
    email: string;
}

export interface LoginResponse {
    access_token: string;
}