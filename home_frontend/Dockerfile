FROM node

WORKDIR /app

COPY package.json .
RUN npm i

COPY . .

RUN echo  "VITE_API_URL=192.168.0.38" > .env

EXPOSE 5173

CMD ["npm", "run", "docker"]