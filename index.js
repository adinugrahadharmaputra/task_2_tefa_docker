const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient({
  host: 'redis-server',
  port: 6379
});
client.set('counter', 0);

const PORT = 4001;

app.get('/',(req,res) => {
  client.get('counter', (err, reply) => {
    res.send("Page Visitor Counter : " + reply);
    client.set('counter', parseInt(reply) +1 );
  });
});



app.listen(PORT, () =>{
  console.log("Listening on port "+ PORT);
});
