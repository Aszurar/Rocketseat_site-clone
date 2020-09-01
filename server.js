const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

const coursesdata = require('./coursesdata');

server.use(express.static("public"));

server.set("view engine", "njk");
nunjucks.configure("views", {
    express: server,
    autoescape: false
});

server.get("/", function (req, res) {
    const index = {
        description: "Mais do que uma plataforma de educação em tecnologia, somos uma comunidade incrível de programadores em busca do próximo nível 🚀",
        hit: "Receba nossos conteúdos exclusivos",
        button: { buttontext: "Digite seu email", alt: "Enviar" },
        links: [
            { title: "Comunidade", link: "https://discordapp.com/invite/gCRAFhc" },
            { title: "Email", link: "mailto:oi@rocketseat.com.br" },
            { title: "Telefone", link: "tel:+5547992078767" }
        ]
    }
    return res.render("index", { index: index });
});

server.get("/about", function (req, res) {
    const about = {
        img: "https://avatars0.githubusercontent.com/u/28929274?s=200&v=4",
        title: "Rocketseat",
        description: "As melhores tecnologias em programação, usadas pela Nubank, Netflix, Uber, Instagram e Airbnb, direto ao ponto e do jeito certo. 🚀",
        subtitle: "Tecnologias",
        cards: ["CSS",
            "HTML",
            "Javascript",
            "Nodejs",
            "ReactJS",
            "React Native"
        ]
    }
    return res.render("about", { about: about });
});

server.get("/courses", function (req, res) {
    return res.render("courses", { courses: coursesdata });
});

server.get("/courses/:index", function (req, res) {
    const id = req.params.index;

    const dataId = coursesdata.find(function (dataId) {
        return dataId.title == id;
    });

    if (!dataId) {
        return res.send("Video not founded!.");
    }

    return res.render("course", { item: dataId });
});

server.use(function (req, res) {
    const errodata = {
        title: "ERRO 404 | Página não encontrada!",
        number: "404",
        description: "Desculpe, mas o conteúdo solicitado não esta disonível ou a página não existe. <br><br> Verifique o nome do endereço solicitado.",
        info: "ERRO"
    }

    res.status(404).render("not-found", { errodata: errodata });
});

server.listen("5002", function () {
    console.log("Server is running");
});
