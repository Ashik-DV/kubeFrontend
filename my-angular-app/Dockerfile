# Stage 1: Build Angular application
FROM node:22-alpine AS build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy Angular source code
COPY . .

# Build Angular application
RUN npm run build


# Stage 2: Run Angular using Nginx
FROM nginx:alpine

# Remove default nginx files
RUN rm -rf /usr/share/nginx/html/*

# Copy Angular build output
COPY --from=build /app/dist/my-angular-app/browser /usr/share/nginx/html

# Angular application runs through Nginx
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]