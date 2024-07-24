FROM node:22-alpine

WORKDIR /app

COPY ./dist /app/dist

RUN npm install -g serve

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]
