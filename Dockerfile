# Build stage
FROM node:18.12.1 AS builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

# Final stage
FROM pierrezemb/gostatic

COPY --from=builder /usr/src/app/dist /srv/http/

EXPOSE 8043

ENTRYPOINT ["/goStatic"]