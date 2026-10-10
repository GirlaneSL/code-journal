# Code Journal 📓

> 🚧 Projeto Pessoal | Em desenvolvimento 🚧

Um blog full-stack que também atua como portfólio pessoal. Este projeto foi desenvolvido para aprofundar conhecimentos em arquiteturas modernas, utilizando uma estrutura de **Monorepo** para separar e ao mesmo tempo integrar perfeitamente o Frontend, o Backend e os tipos compartilhados.

## 🏗️ Arquitetura e Tecnologias

O projeto está estruturado em um **Monorepo** gerenciado pelo NPM Workspaces, dividido da seguinte forma:

### 🌐 Frontend (`apps/web`)
- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Biblioteca UI:** [React 19](https://react.dev/)
- **Estilização:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Renderização de Conteúdo:** React Markdown

### ⚙️ Backend (`apps/api`)
- **Framework:** [NestJS 11](https://nestjs.com/)
- **Linguagem:** TypeScript
- **ORM:** [Prisma](https://www.prisma.io/) (`@prisma/client`)
- **Banco de Dados:** PostgreSQL 17 (via Docker)
- **Autenticação:** JWT (`@nestjs/jwt`)

### 📦 Pacotes Compartilhados (`packages/`)
- `@code-journal/types`: Tipagens unificadas consumidas tanto pela API quanto pelo Web.

---

## 🚀 Como executar o projeto localmente

### 📋 Pré-requisitos
- [Node.js](https://nodejs.org/en/) (v20+ recomendado)
- [NPM](https://www.npmjs.com/) (v11+ recomendado)
- [Docker](https://www.docker.com/) e Docker Compose (para o banco de dados)

### 1️⃣ Instalação e Configuração

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/GirlaneSL/code-journal.git
   cd code-journal
   ```

2. **Instale as dependências:**
   Na raiz do projeto, instale as dependências de todos os workspaces:
   ```bash
   npm install
   ```

3. **Configure as Variáveis de Ambiente:**
   Você precisará criar três arquivos `.env` baseados nos seus respectivos `.env.example`:

   - **Na raiz (`./.env`):** (Para o Docker)
     ```env
     POSTGRES_USER=postgres
     POSTGRES_PASSWORD=sua_senha
     POSTGRES_DB=codejournal
     ```
   
   - **No Backend (`apps/api/.env`):**
     ```env
     DATABASE_URL="postgresql://postgres:sua_senha@localhost:5432/codejournal?schema=public"
     JWT_SECRET="sua_chave_secreta_aqui"
     ```
   
   - **No Frontend (`apps/web/.env.local`):**
     ```env
     NEXT_PUBLIC_API_URL="http://localhost:3001"
     ```

### 2️⃣ Inicializando o Banco de Dados

Suba o contêiner do PostgreSQL e rode as migrations do Prisma para criar as tabelas:

```bash
# Sobe o banco de dados em segundo plano
docker-compose up -d

# Entra na pasta da API e roda as migrations do banco
cd apps/api
npx prisma migrate dev
```

### 3️⃣ Rodando as Aplicações

Como é um monorepo, você pode rodar os serviços em terminais separados:

**Terminal 1 (Backend API):**
```bash
cd apps/api
npm run start:dev
```
A API estará disponível em `http://localhost:3001`.

**Terminal 2 (Frontend Web):**
```bash
cd apps/web
npm run dev
```
O Frontend estará disponível em `http://localhost:3000`.

---

## 📖 Documentação Adicional

Decisões de arquitetura (ADRs) estão documentadas na pasta `docs/decisions/`:
- `001`: Escolha entre NestJS vs Next.js API Routes.
- `002`: Estruturação do Monorepo.
- `003`: Estratégia de Autenticação.

## 👤 Autor

Desenvolvido por [GirlaneSL](https://github.com/GirlaneSL).