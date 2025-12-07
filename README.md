# Projeto Pizzaria Mobile
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/DevRogerFer/pizzaria_mobile/blob/main/LICENSE)
# Sobre o Projeto

Desenvolvimento do aplicativo Mobile de uma aplicação completa voltada ao atendimento de uma pizzaria. 
O projeto inclui a criação de interfaces modernas e intuitivas para smartphones, permitindo que o garçom/atendente realize a abertura da mesa e a inclusão de um novo pedido, 
bem como a sua exclusão e finalização, acrescentando ainda os detalhes do pedido.
O app integra-se à API do sistema, garantindo comunicação eficiente com o backend e proporcionando uma experiência fluida, responsiva e otimizada para dispositivos móveis.


## Ambiente de Produção
Implantado no Expo:

Abertura de uma nova mesa (garçom e/ou atendente:

![Aberura da Mesa](https://github.com/DevRogerFer/pizzaria_mobile/blob/main/assets/1.abrir_mesa.png)

Registrando um novo pedido:

![Novo Pedido](https://github.com/DevRogerFer/pizzaria_mobile/blob/main/assets/2.%20novo_pedido.png)

Incluindo/Excluindo itens do pedido:

![Itens do Pedido](https://github.com/DevRogerFer/pizzaria_mobile/blob/main/assets/3.%20itens_pedido.png)

Finalizando o pedido:

![Finalizando Pedido](https://github.com/DevRogerFer/pizzaria_mobile/blob/main/assets/4.%20finalizar_pedido.png)

# Tecnologias utilizadas - Frontend Mobile:

## Core
  * React Native 0.81.5 - Framework para desenvolvimento mobile
  * React 19.1.0 - Biblioteca JavaScript para UI
  * TypeScript 5.9.2 - Superset JavaScript com tipagem estática
  * Expo 54.0.23 - Plataforma de desenvolvimento React Native

## Navegação
  * React Navigation 7.1.19 - Sistema de navegação
    * Native Stack Navigator 7.6.2 - Navegação nativa entre telas

## Linguagem e Ferramentas:
  * TypeScript 5.9.2 - Superset tipado do JavaScript
  * Sass 1.90.0 - Pré-processador CSS

## Estado e Context
  * Context API - Gerenciamento de estado global (AuthContext)
  * AsyncStorage 2.2.0 - Armazenamento local de dados

## Requisições HTTP
  * Axios 1.13.2 - Cliente HTTP para chamadas à API

## UI/UX
  * React Native Safe Area Context 5.6.0 - Gestão de áreas seguras
  * React Native Screens 4.16.0 - Otimização de telas
  * Expo Vector Icons - Ícones (Feather)
  * Expo Status Bar 3.0.8 - Controle da barra de status

## Infraestrutura de Imagens:
  * Cloudinary - Armazenamento e otimização de imagens (URLs retornadas pela API)
  * Next.js Image Optimization - Otimização automática de imagens

## Estilização
  * StyleSheet (React Native) - Estilização nativa
  * Tema customizado com paleta de cores (#1D1D2E, #3FFFA3, #101026)

## Autenticação e Segurança
  * JWT (JSON Web Token) - Autenticação via tokens
  * AsyncStorage - Armazenamento seguro de credenciais
  * Axios Interceptors - Injeção automática de tokens

## Build e Deploy
  * EAS Build - Sistema de build da Expo
  * APK - Build para Android

## Backend (integração)
  * Railway - Plataforma de hospedagem do backend
  * API REST - Comunicação via endpoints HTTP

## Ferramentas de Desenvolvimento
  * Node.js - Runtime JavaScript
  * NPM - Gerenciador de pacotes
  * Metro Bundler - Bundler do React Native
  * Git - Controle de versão

## Arquitetura
  * Estrutura por features (pages, contexts, routes, services, components)
  * TypeScript types - Tipagem forte
  * Modular - Componentes reutilizáveis

## Resumo da Stack:
  * Um app React Native moderno com TypeScript, usando Expo para facilitar o desenvolvimento, React Navigation para rotas, e Context API + AsyncStorage para gerenciamento de estado!

# Autor
Rogério Fernandes Siqueira
