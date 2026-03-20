# 超简 Dockerfile - 使用本地构建产物和依赖
FROM node:lts-alpine

WORKDIR /app

# 复制本地已安装好的 node_modules（完整依赖）
COPY node_modules ./node_modules

# 复制 package.json
COPY package.json ./

# 复制本地已构建好的 dist 目录
COPY dist ./dist

# 暴露端口
EXPOSE 8001

# 直接运行构建后的代码
CMD ["node", "dist/index.js"]
