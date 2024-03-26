# Requirements
- NodeJS
- NPM
- Docker Desktop

# Usage
- Before starting, make sure Docker Desktop is running

```
git clone https://github.com/pianoplayerjames/webai.git
cd webai
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
- Database ```webai```

# Mongodb GUI
To view your database you can use mongodb compass:
https://www.mongodb.com/products/tools/compass

VueJS Frontend:
Project files can be found in ```client/src```