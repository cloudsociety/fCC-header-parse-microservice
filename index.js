var express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req,res) => {
  var ipaddress = req.headers['x-forwarded-for'] ||
       req.connection.remoteAddress ||
       req.socket.remoteAddress ||
       req.connection.socket.remoteAddress;
  // const ipaddress = req.ip;
  const language = req.headers['accept-language'];
  const software = req.headers['user-agent'].split(/[()]/g)[1];
  res.send({ipaddress, language, software});
})


app.listen(PORT, function () {
  console.log(`Express server is up on port ${PORT}`);
});


module.exports = {
  app
};
