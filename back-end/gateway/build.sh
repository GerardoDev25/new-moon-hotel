rm -fr dist/ && npm run build && docker build . -t gateway:1.0.0
