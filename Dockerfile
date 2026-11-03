FROM node:24-bookworm-slim
WORKDIR /app
RUN npm install -g pnpm@12.5.1
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
ARG SITE_URL
ENV SITE_URL=$SITE_URL
RUN pnpm build
ENV NODE_ENV=production
ENV PORT=8080
EXPOSE 8080
CMD ["pnpm", "start"]
