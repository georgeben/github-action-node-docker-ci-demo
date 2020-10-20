FROM node:12-alpine

USER node

WORKDIR /home/node/app

COPY --chown=node:node . .

CMD ["node", "index.js"]