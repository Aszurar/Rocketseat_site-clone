# Rocketseat_site-clone
Site clone da Rocketseat sendo criado pelos desafios ao longo da 2º fase do **Bootcamp LaunchBase da Rocketseat** e sendo atualizado com o passar das fases do curso com novas features.
___
<h2 align="center">Rocketseat - Clone</h2>

___




<h3 align="center">
  <a href="#information_source-sobre">Sobre</a>&nbsp;|&nbsp;
  <a href="#interrobang-motivo">Motivo</a>&nbsp;|&nbsp;
  <a href="#seedling-requisitos-mínimos">Requisitos</a>&nbsp;|&nbsp;
  <a href="#rocket-tecnologias-utilizadas">Tecnologias</a>&nbsp;|&nbsp;
  <a href="#package-como-baixar-o-projeto">Baixar</a>&nbsp;
</h3>

___

<div align="center" ><img src="" width="600"></div>

___

## :information_source: Sobre

O projeto é um **site clone da Rocketseat** que começou a ser desenvolvido nos Desafios 3.1-3.3 da **2º fase do Bootcamp LaunchBase**.
Apesar de ser completo no Desafio 3.3, pretendo atualiza-lo a cada módulo terminado no curso com novas funcionalidades e novas tecnologias.
___
## :interrobang: Motivo

O Intuito é praticar os conhecimentos absorvidos ao longo do curso de javascript, html, nunjucks, css, servidor, dentre outros, a fim de estabelece-los e fixa-los de forma sólida aumentando o portfólio pessoal.
___
## :seedling: Requisitos Mínimos

Node.js, Nunjucks e Express.
___
## :rocket: Tecnologias Utilizadas 

O projeto foi desenvolvido utilizando as seguintes tecnologias

- [Node.js](https://nodejs.org/en/)
- [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [Nunjucks](https://mozilla.github.io/nunjucks/)

___
## :package: Como baixar o projeto

  - Clonar o projeto:
```bash
  $ git clone https://github.com/Aszurar/Rocketseat_site-clone.git
```
- Entrar na pasta do projeto:
```bash
  $ cd NomedaPasta
```
- Após instalar o Node.js, executar o npm:
```bash
  $ npm init -y
```
- Instalar o Express:
```bash
  $ npm install express
```
- Instalar o Nodemon:
```bash
  $ npm install -D nodemon  
```
- Após isso configure o script do arquivo package.json assim:
```json
  "scripts": {
      "start": "nodemon server.js"
    }
```
- Instalar o Nunjucks:
```bash
  $ npm install nunjucks
```
 - Execução:
 ```bash
  $ npm start
```

- As configurações no serve.js já estão feitas para utilizarem essas ferramentas.
- Como adicional, mas não obrigatório, para facilitar a atualização da página com alterações feitas no css, njk e js, sugiro criar um arquivo json na pasta do projeto com nome nodemon, exemplo nodemon.json, e nesse arquivo escrever essa configuração:
```json
    {
        "ext": "js, njk, css"
    }
```
- Isso fara com que cada vez que for alterado algum arquivo dessas extensões, ao salva-lo e atualizar a página, essas alterações já serão mostradas na visualização do navegador.
___
Desenvolvido por :star2: Lucas de Lima Martins de Souza.
