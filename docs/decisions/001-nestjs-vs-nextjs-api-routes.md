# NestJS como backend, em vez de API routes do Next.js

## Problema
O Next.js sozinho já oferece API Routes, o que resolveria
um blog simples sem precisar de um segundo serviço.

## Decisão
Separar o backend em uma aplicação NestJS própria, mesmo
que isso signifique mais infraestrutura inicialmente.

## Consequências
Vantagens:
- organização por módulos de domínio (articles, tags, auth...), facilitando a evolução do backend;
- o backend torna-se reutilizável por outros clientes no futuro
(app mobile, outro frontend), não só pelo Next.js;
- separação clara entre frontend e backend.

Desvantagens:
- necessidade de manter e implantar duas aplicações em vez de uma;
- maior complexidade de infraestrutura e documentação.