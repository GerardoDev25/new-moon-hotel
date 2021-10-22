FROM node:16.5.0-alpine3.12

ENV WORKDIR=/app
ENV TZ="America/Bolivia/La_Paz"

RUN apk add tzdata

RUN mkdir $WORKDIR
WORKDIR $WORKDIR

COPY package.json $WORKDIR

RUN npm i --production

COPY dist $WORKDIR/dist

CMD [ "npm", "start" ]