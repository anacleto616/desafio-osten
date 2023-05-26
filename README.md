# Desafio Osten Moove

## 🚀 Principais tecnologias utilizadas

- Node.js
- Typescript
- Express.js
- Prisma
- Docker
- React.js
- React Router Dom
- React Query
- React Hook Form

## ⚙️ Como executar o projeto

- Instalar o Node.js na sua máquina: https://nodejs.org/en/
- Instalar o Docker: https://www.docker.com/;
- Abra o terminal e clone o projeto numa pasta de sua preferência: git clone https://github.com/anacleto616/desafio-osten.git
- Entre na pasta desafio-osten com: `cd desafio-osten`
- Entre na pasta server com: `cd server`
- Digite o comando: `npm install`, para instalar as dependências do back end
- Digite o comando do docker no terminal para iniciar o banco de dados (se estiver no windows utilize WSL com o docker engine instalado):
  - `docker run --name pg-osten -e POSTGRES_USER=osten -e POSTGRES_PASSWORD=ostenpass -p 5432:5432 -d postgres`
- Crie um arquivo `.env` na raiz do projeto inserindo o seguinte conteúdo:
  - DATABASE_URL="postgresql://osten:ostenpass@localhost:5432/osten-db?schema=public"
- Digite o comando: `npx prisma generate`, para fazer o gerar o prisma client do banco de dados
- Digite o comando: `npx prisma db push`, para fazer o push do banco de dados
- Digite o comando: `npx prisma db seed`, para fazer o seed do banco de dados
- Execute o back end com o comando: `npm run dev`, estará rodando no endereço: http://localhost:3333
- Volte uma pasta no terminal: `cd ..`
- Entre na pasta web com: `cd web`
- Digite o comando: `npm install`, para instalar as dependências do front end
- Execute o front end com o comando: `npm run dev`, estará rodando no endereço: http://localhost:5173