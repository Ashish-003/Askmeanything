FROM node:20.11.1-alpine
WORKDIR /app
COPY ./package.json ./package.json
COPY ./src ./src
COPY ./config ./config 
COPY ./constants ./constants
RUN npm install 
EXPOSE 8082
CMD ["npm", "start"]
