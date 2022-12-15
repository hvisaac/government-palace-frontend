FROM node:16.17.0

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "ionic", "serve --external"]