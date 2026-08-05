# Monorepo, em vez repositórios separados

## Problema
O sistema é composto por múltiplas aplicações (frontend e backend)
que compartilham configurações, tipos e, futuramente, bibliotecas
internas. Manter cada projeto em um repositório separado aumentaria
a duplicação de código e tornaria mudanças que afetam ambos os
projetos mais trabalhosas.

## Decisão
Centralizar todas as aplicações e pacotes em um único repositório
(monorepo), mesmo que isso aumente a complexidade inicial e exija
o uso de ferramentas específicas para gerenciar o workspace.

## Consequências
Vantagens:
- reduz duplicação de código e facilita manutenção;
- permite compartilhar configurações, tipos e bibliotecas internas;
- mudanças que afetam frontend e backend podem ser feitas em um único commit;
- padroniza ferramentas, scripts e convenções do projeto.

Desvantagens:
- repositório tende a crescer com o tempo.