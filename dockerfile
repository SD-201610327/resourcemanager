FROM node:14-alpine

WORKDIR /usr/app/resourcemanager
RUN npm install

COPY . .
RUN npm install -g

EXPOSE 3002

