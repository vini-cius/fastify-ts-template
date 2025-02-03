# Fastify TypeScript Template

## Description
This is a boilerplate project for building APIs using Fastify with TypeScript. It comes pre-configured with essential tools and best practices for rapid development.

## Technologies Used
- [Node.js](https://nodejs.org/) - Runtime environment
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- [Fastify](https://www.fastify.io/) - Web framework for Node.js
- [Zod](https://zod.dev/) - TypeScript-first schema validation
- [ZodTypeProvider](https://github.com/fastify/fastify-type-provider-zod) - Zod integration with Fastify
- [Swagger](https://swagger.io/) - API documentation
- [Prisma ORM](https://www.prisma.io/) - Database ORM
- [ESLint](https://eslint.org/) - Linting tool
- [Prettier](https://prettier.io/) - Code formatter
- [Tsup](https://github.com/egoist/tsup) - TypeScript bundler
- [fastify/jwt](https://github.com/fastify/fastify-jwt) - JWT authentication plugin for Fastify

## Installation

### Using GitHub Template
1. Create a new repository using this template:
   ```sh
   gh repo create my-project --template https://github.com/vini-cius/fastify-ts-template
   ```
2. Clone your new repository:
   ```sh
   git clone https://github.com/vini-cius/my-project.git
   ```

### Manual Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/vini-cius/fastify-ts-template.git my-project
   ```
2. Remove the existing Git history to start fresh:
   ```sh
   cd my-project
   rm -rf .git
   git init
   ```
3. Install dependencies:
   ```sh
   pnpm install
   ```

## Usage

### Running the development server
```sh
pnpm dev
```

### Building the project
```sh
pnpm build
```

### Running the production server
```sh
pnpm start
```

## Environment Variables
Create a `.env` file in the root directory and add the necessary environment variables.
Example:
```env
SERVER_PORT=3333
DATABASE_URL=postgresql://user:password@localhost:5432/dbname
JWT_SECRET=your-secret-key
```

## API Documentation
The API documentation is automatically generated using Swagger. Once the server is running, visit:
```
http://localhost:3333/docs
```

## Linting and Formatting
- Run ESLint:
  ```sh
  pnpm lint
  ```

## License
[MIT](LICENSE)
