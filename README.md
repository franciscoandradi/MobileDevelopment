# MobileDevelopment

# 📱 Loja Mobile - React Native + Expo

Aplicativo mobile desenvolvido com React Native utilizando Expo, com o objetivo de apresentar produtos de uma loja online organizados por categorias (masculino e feminino), consumindo uma API REST real.

Este projeto foi desenvolvido como parte do portfólio acadêmico do curso de Análise e Desenvolvimento de Sistemas.

---

## 🚀 Tecnologias Utilizadas

- React Native
- Expo
- TypeScript
- Axios
- Redux Toolkit
- React Navigation (Stack + Top Tabs)

---

## 🎯 Objetivo do Projeto

Desenvolver a primeira versão de um aplicativo mobile responsivo e leve para:

- Simular autenticação de usuário
- Listar produtos por categoria
- Consumir dados de uma API REST real
- Navegar entre telas
- Exibir detalhes de produtos
- Implementar logout funcional

API utilizada:
https://dummyjson.com/

---

## 📱 Funcionalidades Implementadas

### 🔐 Tela de Login
- Validação de campos obrigatórios
- Armazenamento temporário do usuário com Redux Toolkit
- Redirecionamento após login bem-sucedido

---

### 🛍 Tela de Produtos com Abas
Organização por categorias:

#### Masculino:
- mens-shirts
- mens-shoes
- mens-watches

#### Feminino:
- womens-bags
- womens-dresses
- womens-jewellery
- womens-shoes
- womens-watches

- Consumo de dados via Axios
- Listagem dinâmica utilizando FlatList
- Navegação para tela de detalhes

---

### 📄 Tela de Detalhes do Produto
Exibe:
- Nome
- Imagem
- Descrição
- Preço
- Percentual de desconto

Consumo via:
https://dummyjson.com/products/{id}

---

### 🚪 Logout
- Botão no header
- Limpa o estado global
- Retorna automaticamente para tela de login

---

▶️ Como Executar o Projeto
### 1️⃣ Clonar o repositório
git clone <https://github.com/franciscoandradi/MobileDevelopment>

### 2️⃣ Instalar dependências
npm install axios
npm install @reduxjs/toolkit react-redux
npm install @react-navigation/native
npm install @react-navigation/native-stack
npm install @react-navigation/material-top-tabs
npx expo install react-native-screens react-native-safe-area-context react-native-tab-view react-native-pager-view

3️⃣ Iniciar o projeto
npx expo start

Depois:

- Pressione `a` para abrir no Android
- Pressione `i` para abrir no iOS (Mac)
- Ou escaneie o QR Code com o Expo Go

---

## 📚 Conceitos Aplicados

- Componentização
- Navegação entre telas
- Consumo de API REST
- Gerenciamento de estado global
- Tipagem com TypeScript
- Estruturação de projeto React Native
- Boas práticas de organização de código

---

## 🎓 Considerações Finais

Este projeto permitiu aplicar conceitos fundamentais do desenvolvimento mobile, incluindo consumo de APIs externas, gerenciamento de estado e navegação entre telas.

A utilização de TypeScript trouxe maior segurança e organização ao código, enquanto o Redux Toolkit facilitou o controle do estado global da aplicação.

---

## 👨‍💻  De: 

Francisco Andrade de Souza
RA 90171
Curso: Análise e Desenvolvimento de Sistemas
