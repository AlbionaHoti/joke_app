FROM node:10-alpine

RUN mkdir -p /joke_app

WORKDIR /joke_app
COPY ./package*.json ./
RUN npm install


COPY . .

EXPOSE 3000

CMD [ "node", "start" ]