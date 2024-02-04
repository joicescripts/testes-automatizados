# Testes automatizados

#### Grupo: Joffre Quintas e Joice Martins

## Contexto:
* Trabalho realizado para a disciplina de testes automatizados, do curso ministrado pela Ada Tech em parceria com o Grupo Boticário

## Instruções do projeto:
* Crie testes unitários para o fluxo de sessão de usuários (Controllers e Services) 
* Crie testes de integração para o fluxo de criação de usuários (Controllers e Services)
* Não é necessário fazer testes e2e mas será apreciado
* Utilize mocks quando necessário
* O trabalho pode ser feito em grupo de até 5 pessoas.

## Como rodar esse projeto localmente:
* Faça um clone desse projeto na sua máquina
* No terminal rode o comando ´´´npm i´´´
* Crie um arquivo .env na raiz do seu projeto e nele adicione:
    * PORT=3000
    * SECRET_KEY=
    * MONGO_DB_URL =

obs : utilizamos um banco de dados criado no mongodb atlas para rodar esse projeto
* Feito isso rode os testes com o comando ´´´npm run test´´´
