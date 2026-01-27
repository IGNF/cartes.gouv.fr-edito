#----------------------------------------------------------------------
# cartesgouvfr-edito : Génération d'un build statique
#----------------------------------------------------------------------
FROM node:24-alpine AS builder

RUN apk add git

WORKDIR /app
COPY . .

RUN npm ci \
    && SITE_ENV=production npx @11ty/eleventy \
    && npx pagefind --site _site/ --output-subdir \"_pagefind\" \
    && rm -rf node_modules .git

#----------------------------------------------------------------------
# cartesgouvfr-edito : Config d'un serveur statique avec nginx
#----------------------------------------------------------------------
FROM nginxinc/nginx-unprivileged:alpine-slim
COPY --from=builder /app/_site /usr/share/nginx/html/
COPY .docker/nginx.conf /etc/nginx/nginx.conf

EXPOSE 8082

USER nginx

CMD ["nginx", "-g", "daemon off;"]
