# 🍪 Galleta de la Fortuna

[![Laravel](https://img.shields.io/badge/Laravel-10.x-ff2d20?style=flat-square&logo=laravel&logoColor=white)](https://laravel.com/)
[![AngularJS](https://img.shields.io/badge/AngularJS-1.8.2-e23237?style=flat-square&logo=angularjs&logoColor=white)](https://angularjs.org/)
[![MIT License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](LICENSE)

> **Proyecto académico – Escuela Da Vinci 🇦🇷**

---

## ✨ Sobre o Projeto

**Galleta de la Fortuna** é uma aplicação web interativa desenvolvida com [Laravel](https://laravel.com/) (API REST) e [AngularJS](https://angularjs.org/) (front-end SPA).  
O objetivo? Sortear mensagens de sabedoria inspiradas na clássica *fortune cookie* chinesa, com uma experiência de usuário bonita, moderna e simples.

- **Login fictício**: basta digitar seu nome.
- **Call to action claro**: botão “ABRE TU GALLETA”.
- **Mensagens aleatórias**: cada sorteio traz um novo conselho.
- **Backend 100% PHP/Laravel**: API pronta para expandir.
- **Frontend desacoplado**: fácil de customizar e estilizar.
- **Design responsivo**: pode abrir no celular ou desktop.

---

## 🚦 Tecnologias & Ferramentas

- **PHP 8.x**
- **Laravel 10.x**
- **AngularJS 1.8.2** (rodando no navegador, sem build!)
- **CSS3** (com Google Fonts)
- **VS Code**
- **Git & GitHub**

---

## 🥇 Demonstração

![Demo do app rodando](./demo.gif)


## 🧑‍💻 Como rodar localmente

1. **Clone o repositório:**
   ```sh
   git clone https://github.com/brunomartins27/galleta-fortuna.git
   cd galleta-fortuna
composer install

cp .env.example .env

php artisan key:generate

php artisan serve

http://127.0.0.1:8000/fortune-app/index.html

## 🎲 Como funciona?

Tela de Login:
Digite seu nome (registro fictício, sem banco).

Tela do Sorteio:
Clique em “ABRE TU GALLETA”.

API REST Laravel:
O front faz uma requisição para /fortune, e recebe uma mensagem randômica da sorte.

Navegação fluida:
Você pode voltar, sair, sortear quantas vezes quiser.

## Estructura del proyecto 

galleta-fortuna/
├── public/
│   └── fortune-app/
│       ├── index.html     // SPA AngularJS
│       ├── app.js        // Lógica AngularJS
│       └── style.css     // Estilização customizada
├── routes/
│   └── api.php           // Rotas da API
├── app/
│   └── Http/
│       └── Controllers/
│           └── FortuneController.php // Controller de mensagens
└── ...

## ✍️ Créditos

**Dessarrollador Jr: Bruno Martins**

## 🤩 Curiosidades Técnicas
Não precisa de banco de dados: as mensagens são sorteadas diretamente do backend!

O front-end é estático, mas totalmente dinâmico com AngularJS puro.

Projeto fácil de expandir: pode salvar usuários, adicionar banco de dados, trocar as frases, criar ranking, etc.

Pronto para deploy em qualquer ambiente PHP/Laravel.



