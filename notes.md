## my-react-ssr-prod
    "dev": "node webpack/scripts/start.js",
    "fe:watch": "webpack --config  ./webpack/webpack.dev.config.js --watch",
    "svr:watch": "node ./webpack/scripts/svr-code-watch.js",
    "build": "cross-env NODE_ENV=production npm run client:build && npm run server:build",
    "client:build": "cross-env NODE_ENV=production webpack --config  ./webpack/webpack.prod.config.js",
    "server:build": "cross-env NODE_ENV=production webpack --config  ./webpack/webpack.server.config.js",
    "prod:start": "node ./dist/server/app.js"
## scripts
### dev
node webpack/scripts/start.js