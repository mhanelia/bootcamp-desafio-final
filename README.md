
# Desafio Agilizei N1

Desafio do Chapter #1 proposto no Bootcamp de Cypress ministrado pelo @samlucax

Consiste em validar o cadastro no http://automationpractice.com e publicar no GitHub Pages

## Ferramentas utilizadas:

[Node.js](https://nodejs.org/)

[Framework: Cypress](https://www.cypress.io/)

[lib: cypress-grep](https://github.com/cypress-io/cypress-grep)

[lib: cy-spok](https://github.com/bahmutov/cy-spok)

## Instalação:

1- instalar o Node.js

2- criar uma pasta para o projeto

3- abra o terminal na pasta

4- para iniciar um projeto node digite:

```bash
npm init -y
```

5- após iniciar o projeto, basta instalar o Cypress:

````bash
npm install -D cypress
````

6- instalação do cy-spok

````bash
npm install -D cy-spok

````

7- instalação do cypress-grep

````bash
npm i -D cypress-grep
````

8- por fim, basta abrir o cypress:

````bash
npx cypress open
````

## Uso

Para executar com um navegar e vizualizar o teste, basta executar:

````bash
npm run test
````

Para executar os testes utilizando filtros, o comando é:

testes @healthcheck:

```bash
npm run test:healthcheck
```

testes @contract:

```bash
npm run test:contract
```

testes @functional:

```bash
npm run test:functional
```
