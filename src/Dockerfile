FROM node:18-alpine

WORKDIR /library-app

# Copy package.json and package-lock.json
COPY package*.json .

# Install dependencies
RUN npm install

# Copy the entire project
COPY . .

RUN npm run build

# Expose the port the app will run on
EXPOSE 3000

# Start the app
CMD ["npm", "start"]