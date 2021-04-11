FROM docker:latest

RUN apk update

RUN apk add curl

RUN apk add sudo

RUN apk add --update nodejs nodejs-npm

# RUN curl -sL https://deb.nodesource.com/setup_4.x | sh

# RUN apk install nodejs

RUN node -v

RUN npm -v