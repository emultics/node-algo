const express = require('express');
const arrayRouter = require('./src/routes/arrayRoutes');
const app = express();
app.use(express.json());
app.use('/api', arrayRouter);
app.listen(3000, () => {
  console.log(`server listening on 3000}`);
});

