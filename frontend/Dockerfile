# Stage 1
FROM node:16 as build-stage

WORKDIR /chat-app-frontend
COPY package.json .
RUN npm install
COPY . .

ARG REACT_APP_API_BASE_URL
ENV REACT_APP_API_BASE_URL=$REACT_APP_API_BASE_URL

CMD npm run dev

