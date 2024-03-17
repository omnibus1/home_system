FROM node:alpine

ARG API_URL
ENV API_URL=$API_URL

WORKDIR /app

COPY package.json .

RUN npm i

COPY . .

RUN echo  "VITE_API_URL=${API_URL}" > .env

EXPOSE 5173

CMD ["npm", "run", "docker"]