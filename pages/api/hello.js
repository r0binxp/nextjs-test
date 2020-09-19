// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/next', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
   console.log("Connected to DB")
});

export default (req, res) => {
  res.statusCode = 200
  res.json({ name: 'John Doe' })
}
