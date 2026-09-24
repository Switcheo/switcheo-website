# Production image for Cloud Run.
# Node 16 matches Next.js 11: newer Node versions need --openssl-legacy-provider to build.
FROM node:16-bullseye-slim AS deps
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --production && yarn cache clean

FROM node:16-bullseye-slim AS build
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
# .next/cache only holds webpack and ESLint build caches; the server recreates it for images.
RUN yarn build && rm -rf .next/cache

FROM node:16-bullseye-slim
WORKDIR /app
# The heap limit keeps Node inside a 1 GiB Cloud Run instance; Node 16 does not read cgroup limits.
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    NODE_OPTIONS=--max-old-space-size=768
COPY --from=deps --chown=node:node /app/node_modules ./node_modules
COPY --from=build --chown=node:node /app/.next ./.next
COPY --chown=node:node package.json next.config.js ./
COPY --chown=node:node public ./public
USER node
EXPOSE 8080
# Cloud Run sets PORT; default to 8080 for local runs.
CMD ["sh", "-c", "exec node_modules/.bin/next start -H 0.0.0.0 -p ${PORT:-8080}"]
