FROM node:8-alpine
WORKDIR /back
ADD package.json /back/package.json
RUN npm config set registry http://registry.npmjs.org
RUN npm install

ADD . /back
CMD ["npm", "run", "start", "dev"]
