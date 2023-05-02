FROM node:10-alpine

WORKDIR /home/adtra/app

COPY ./package.json ./

RUN npm install

COPY ./ ./

CMD ["npm","start"]
