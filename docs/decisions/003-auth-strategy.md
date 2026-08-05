# Armazenamento do JWT no localStorage, com plano de migração futura

## Problema
Após o login, o frontend precisa guardar o token JWT em algum lugar para reenviá-lo em requisicoes futuras a rotas protegidas.

## Decisão
Guardar o token em localStorage por enquanto, em vez de usar cookies httpOnly desde o início.

## Consequências
Vantagens:
- implementação simples, sem exigir mudanças coordenadas em backend e frontend ao mesmo tempo;
- suficiente para o estágio atual do projeto (uso pessoal, sem dados sensíveis de terceiros).

Desvantagens:
- localstorage é acessível por qualquer script rodando na página, incluindo scripts maliciosos via XSS;
- migrar para cookies httpOnly no futuro exige mudanças no código.

## Revisão futura
Reavaliar ao avançar para V2/V3, ou antes de expor o projeto publicamente para usuários não confiáveis.