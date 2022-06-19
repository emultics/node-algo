const express = require('express');
const arrayRouter = require('./src/routes/arrayRoutes');
const binarySearch = require('./src/utils/utils');

const app = express();
app.use(express.json());
app.use('/api', arrayRouter);

console.log(binarySearch([1,2,3,4,6,0],0,4,4))
app.listen(3000, () => {
  console.log(`server listening on 3000}`);
});

