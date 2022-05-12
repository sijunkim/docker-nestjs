FROM node:16

WORKDIR /usr/src/app
COPY . .

RUN rm -rf node_modules

RUN yarn
RUN yarn build

EXPOSE 3000
CMD [ "yarn", "start" ]