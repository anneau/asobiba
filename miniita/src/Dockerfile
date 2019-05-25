ARG NODE_VERSION
FROM node:${NODE_VERSION}-alpine as base
FROM base as builder

WORKDIR /var/www
COPY package.json ./
COPY yarn.lock ./
RUN yarn install --only=production

FROM base
WORKDIR /var/www
COPY --from=builder /var/www/node_modules ./node_modules
COPY . .
EXPOSE 3000
