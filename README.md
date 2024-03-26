# Requirements
- NodeJS
- NPM
- Docker Desktop

# Usage
- Before starting, make sure Docker Desktop is running

```
git clone https://github.com/pianoplayerjames/mevn.git
cd mevn
npm install
docker-compose up --build -d
npm start
```

# Services
- vue: http://localhost:5173
- express: http://localhost:3000
- mongodb: mongodb://localhost:27017

# MongoDB
- Username ```rootuser```
- Password ```rootpass```
- Database ```mevn-test```

# Mongodb GUI
To view your database you can use mongodb compass:
https://www.mongodb.com/products/tools/compass

VueJS Frontend:
This is a basic boilerplate with added express & mongodb testing. I have also added tailwindcss, Vue Router, pinia & Vue Dev Tools for convinience. project files can be found in ```client/src```

Express Server:
The express server runs on port 3000 and has routes that you can access from vueJS. I have also set up mongodb models so that you can send and retrieve information from the database. in ```client/src/components/test``` you will see 2 files called ```ExpressTest.vue``` and ```MongodbTest.vue``` these are examples of how you can send and receive data from the backend server.

# Docs
Mongoose: https://mongoosejs.com/docs

Express: https://expressjs.com/en/guide/routing.html

Vue: https://vuejs.org/guide

NodeJS: https://nodejs.org/docs/latest/api

Tailwindcss: https://tailwindcss.com/docs
