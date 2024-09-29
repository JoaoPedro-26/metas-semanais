# Rastreador de Metas Semanais

O Rastreador de Metas Semanais é uma aplicação full-stack que ajuda os usuários a definir, acompanhar e completar metas semanais. Ele fornece uma interface amigável para gerenciar objetivos pessoais e visualizar o progresso ao longo da semana.

# Funcionalidades

- Criar e gerenciar metas semanais
- Acompanhar conclusões de metas
- Visualizar resumo e progresso semanal
- Interface web responsiva

# Stack Tecnológica

#### Backend

- Node.js
- Fastify
- PostgreSQL (com Neon)
- Drizzle ORM

#### Frontend

- React
- TypeScript
- Tailwind CSS
- React Query

# Estrutura do Projeto

O projeto é dividido em duas partes principais:

1. Estrutura do Backend

- src/functions/: Contém a lógica de negócios para gerenciamento de metas
- src/http/: Lida com a configuração do servidor HTTP e definições de rotas
- src/db/: Configuração do banco de dados e schema

2. Estrutura do Frontend

- web/src/components/: Componentes React
- web/src/http/: Funções do cliente API

# Instalação

#### Pré-requisitos

- Node.js (v14 ou posterior)
- Banco de dados PostgreSQL (ou conta Neon)

# Configuração

Clone o repositório:

```bash
  git clone https://github.com/JoaoPedro-26/metas-semanais  git cd metas-semanais
```

2. Instale as dependências do backend:

```bash
    npm install
```

3. Configure as variáveis de ambiente:

Crie um arquivo .env no diretório raiz e adicione:

```bash
    DATABASE_URL=sua_url_do_banco_de_dados_aqui
```

4. Instale as dependências do frontend:

```bash
    cd web
   npm install
```

# Executando a Aplicação

Inicie o servidor backend:

```bash
       npm run dev
```

Em um novo terminal, inicie o servidor de desenvolvimento do frontend:

```bash
    cd web
   npm install
```

5. Abra seu navegador e acesse http://localhost:5173 (ou a porta especificada pelo Vite)

# Endpoints da API

- GET /summary: Recupera o resumo semanal das metas
- GET /pending-goals: Obtém a lista de metas pendentes
- POST /goals: Cria uma nova meta
- POST /completions: Marca uma meta como concluída

# Licença

Este projeto está licenciado sob a Licença MIT.
