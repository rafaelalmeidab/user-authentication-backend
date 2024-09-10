# Use a imagem oficial do Node.js, garantindo que estamos usando uma versão LTS
FROM node:20

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia o arquivo package.json e package-lock.json (se houver) para o diretório de trabalho
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia o restante do código da aplicação para o diretório de trabalho
COPY . .

# Expõe a porta que a aplicação usa
EXPOSE 4000

# Define o comando para iniciar a aplicação
CMD ["node", "server.js"]
