#stage 1
FROM node:latest as node    
WORKDIR /app
COPY . .

RUN npm install
RUN npm run build --build 


#stage 2

FROM nginx:alpine
COPY --from=node /app/dist/Resume /usr/share/nginx/html