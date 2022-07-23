FROM node:18

# Create app directory
WORKDIR /wms/src/app

COPY package*.json ./

RUN npm install
# For production use
# RUN npm ci --only-produciton

# Bundle app source
COPY . .

RUN npm run build

EXPOSE 8080
CMD [ "node", "dist/main" ]