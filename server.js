const express = require('express');
const { Fibonacci } = require('./src/controllers/arrayController');
const arrayRouter = require('./src/routes/arrayRoutes');
const { fibonacci } = require('./src/utils/utils');
const app = express();
app.use(express.json());
app.use('/api', arrayRouter);
console.log(fibonacci(0,1,5));
app.listen(3000, () => {
  console.log(`server listening on 3000`);
});
