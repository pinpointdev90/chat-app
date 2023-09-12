FROM node:16.14.2

WORKDIR /frontend
COPY package.json .
RUN npm install
RUN npm install -g nodemon
COPY . .
CMD npm run dev
