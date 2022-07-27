FROM node:16-alpine
WORKDIR /
COPY . .
RUN yarn install --production 
CMD ["node" ,"./dist/index.js"]
EXPOSE 8080
