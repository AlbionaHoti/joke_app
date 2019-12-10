FROM node:10-alpine

RUN mkdir -p /server

WORKDIR /server

COPY package.json package.json
RUN npm install

COPY . .

EXPOSE 3000

CMD [ "node", "start" ]