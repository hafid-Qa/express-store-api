FROM node:lts-alpine

WORKDIR /app

COPY ./package.json /app

RUN yarn install

COPY .  /app

RUN yarn seed

EXPOSE 3000

CMD ["yarn" ,"start"]