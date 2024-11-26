const express = require('express');
const router = require('./routes/index');

const port = 1245;
const app = express();

app.use('/', router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default app;
module.exports = app;
