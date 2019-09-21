# Docker image
FROM node:10
# WORKDIR specifies the directory our
# application's code will live within
WORKDIR /Users/Iqbal/Desktop/app1
# We copy our package.json file to our
# app directory
COPY package.json /Users/Iqbal/Desktop/app1
# We then run npm install to install
# express for our application
RUN npm install
# We then copy the rest of our application
# to the app direcoty
COPY . /Users/Iqbal/Desktop/app1
# We start our application by calling
# npm start.
CMD ["npm", "start"]