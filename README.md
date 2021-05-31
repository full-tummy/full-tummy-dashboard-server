# Template de projeto com Serverless + TypeScript

Este projeto foi gerado utilizando o template `aws-nodejs-typescript` do [Serverless framework](https://www.serverless.com/).

## Instalação/deployment

Antes de iniciar você precisa ter o serverless instalado na sua máquina:

- Para isso, basta rodar: `npm install -g serverless`

Depois, instale as dependências do projeto com:

### NPM

- `npm i` para instalar as dependências do projeto

### Yarn

- `yarn` para instalar as dependências do projeto

## Scripts do projeto

- `dev` roda o projeto localmente
- `test` roda os testes automatizados
- `deploy` faz o deploy para a aws, para configurar o serverless framework, siga esse [tutorial](https://www.serverless.com/framework/docs/providers/aws/guide/credentials/)
- `invoke_local {{NOME_DA_FUNÇÃO}}` para chamar uma função localmente
- `invoke {{NOME_DA_FUNÇÃO}}` para chamar uma função depois de feito o deploy na AWS

## Rodar os testes

Para rodar os testes automatizados primeiramente, devemos iniciar o servidor localmente, rodando o script `dev` e depois rodando o script `test`, exemplo com npm:
```sh
npm run dev
npm run test
````