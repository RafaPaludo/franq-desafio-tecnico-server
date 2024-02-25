# Projeto Proxy Server com Express

Este projeto utiliza o Node.js e o Express para criar um servidor proxy simples que redireciona solicitações para a aplicação [frontend](https://github.com/RafaPaludo/franq-desafio-tecnico/tree/master/franq-frontend).

## Configuração

Certifique-se de ter o Node.js instalado em sua máquina. Você pode baixá-lo em [nodejs.org](https://nodejs.org/).

1. Clone o repositório:

   ```bash
   git clone https://github.com/RafaPaludo/franq-desafio-tecnico-server.git
   cd franq-desafio-tecnico-server

2. Instale as dependências:
   ```bash
   npm install

3. Para iniciar o servidor proxy, execute o seguinte comando:
   ```bash
   npm start

Isso iniciará o servidor na porta padrão 3001. Você pode acessar o servidor proxy em http://localhost:3001/api/finance para listar as cotações da api.

### Rodando com Docker

Se preferir, você também pode executar o projeto usando Docker. Certifique-se de ter o Docker instalado em sua máquina. Você pode baixá-lo em [docker.com](https://www.docker.com/).

1. Clone o repositório:

   ```bash
   git clone https://github.com/RafaPaludo/franq-desafio-tecnico-server.git
   cd franq-desafio-tecnico-server

2. Construa a imagem do Docker:
    ```bash
    docker build -t franq-desafio-tecnico-server .

3. Execute o contêiner Docker:
     ```bash
     docker run -p 3001:3001 franq-desafio-tecnico-server

Isso iniciará o servidor na porta padrão 3001. Você pode acessar o servidor proxy em http://localhost:3001/api/finance para listar as cotações da api.


   
