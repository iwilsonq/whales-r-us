const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.set('port', process.env.PORT || 3050);
app.listen(app.get('port'), () =>
console.log(`Listening at http://localhost:${app.get('port')}`));
