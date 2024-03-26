db = db.getSiblingDB('mevn-test');
db.messages.insertOne({
  "message": "This data is being sent from MongoDB via express!"
});