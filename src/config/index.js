import mongodb from 'mongodb';

export default {
  // "port": 3005,
  // "mongoUrl": "mongodb://localhost:27017/chat-api",
  "port": process.env.PORT,
  "mongoUrl": "mongodb://hamboy:Skamta12!@ds015879.mlab.com:15879/iheard"
  "bodyLimit": "100kb"
}
