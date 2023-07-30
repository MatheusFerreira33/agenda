# Nome do Seu Projeto

## Configuração e Execução da Aplicação

1. Faça o clone do repositório para a sua máquina local usando o seguinte comando:

git clone <URL_DO_REPOSITÓRIO>
Substitua <URL_DO_REPOSITÓRIO> pela URL do repositório que você deseja clonar.

Acesse a pasta do repositório e abra o Visual Studio Code (VSCode) usando o seguinte comando:

cd nome-da-pasta-do-repositorio
code .
Certifique-se de substituir nome-da-pasta-do-repositorio pelo nome da pasta do repositório que você clonou.

Configuração do Backend:

a. Acesse a pasta "back" dentro do repositório e abra o termnal e instale as dependências necessárias usando o seguinte comando:

npm install --force
O parâmetro --force é usado para garantir que todas as dependências sejam instaladas novamente, caso já existam.

b. Crie um arquivo chamado .env na pasta raiz do back e cole o seguinte exemplo de conexão com o banco de dados:

DATABASE_URL="mysql://root:password@host:port/nome-do-banco"
Substitua os valores root, password, host, port e nome-do-banco pelas informações de conexão do seu banco de dados. Certifique-se de criar o banco de dados antes de executar as migrações.

c. Execute as migrações do banco de dados usando o seguinte comando:

npx prisma migrate dev
Isso aplicará as migrações pendentes no banco de dados de acordo com o esquema definido no modelo de dados do Prisma.

d. Após as migrações serem concluídas, inicie o servidor do backend usando o seguinte comando:

npm run dev
Mantenha o terminal aberto para que o servidor do backend continue em execução.

Configuração do Frontend:

a. Acesse a pasta "front" dentro do repositório, abra o terminal e instale as dependências necessárias usando o seguinte comando:

npm install
b. Inicie o servidor de desenvolvimento do frontend usando o seguinte comando:

npm run dev
Mantenha o terminal aberto para que o servidor de desenvolvimento do frontend continue em execução.

Acesse a aplicação:
O projeto frontend estará sendo executado em http://localhost:5173/. Abra o seu navegador e digite esse endereço na barra de URL para acessar a aplicação.

Pronto! O projeto está configurado e rodando. Mantenha ambos os terminais abertos enquanto estiver usando a aplicação. Lembre-se de não fechar os terminais para que os servidores do backend e do frontend permaneçam em execução durante o desenvolvimento.