FROM node:16

WORKDIR /chat-app-backend
COPY package.json .
RUN npm install
RUN npm install -g nodemon
COPY . .
CMD npm run dev
