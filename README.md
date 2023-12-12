# React + Vite

Nesse projeto, pude exercitar um pouco mais sobre o consumo de APIs, no qual acesso uma API pública de um jogo online chamado Valorant. Faço o request dos dados utilizando a fetch API e os renderizo na tela para o usuário.

Basicamente, faço o request dos dados e, ao recebê-los, os instancio em uma variável chamada 'agents' no formato JSON. Como resposta, obtenho um array com acesso a todos os agentes do jogo e algumas especificações. Consigo acessar o índice de cada elemento do array e instanciar cada agente em uma variável com seu respectivo nome (acho que fica mais fácil trabalhar com variáveis). Assim, tenho acesso aos dados de cada agente que preciso. Instancio em uma variável chamada "agentsInfo" um novo array de objetos, sendo que cada objeto é um agente com os atributos que irei precisar trabalhar.

Consumo essa API que retorna esse array de objetos "agentsInfo", com cada agente que escolhi do consumo da API pública da Riot. Basicamente, itero sobre cada elemento (faço o uso do método ".map") e os renderizo na tela.

Vale lembrar que também trabalho com conceitos básicos do React, como JSX, components, uso de estados (useState e useEffect), renderização condicional com ternário e Styled Components.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
