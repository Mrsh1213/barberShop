FROM node:10

# Create app directory
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD [ "npm", "start" ]
EXPOSE 5000
