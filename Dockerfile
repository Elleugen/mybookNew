FROM node:15.13-alpine
WORKDIR /mybook
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
# RUN npm run build
RUN npm run android:dev