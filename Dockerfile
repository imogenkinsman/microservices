FROM node:18.7.0-alpine

COPY package*.json ./

RUN npm install --only=production

COPY ./src ./src
COPY ./videos ./videos

CMD npm start