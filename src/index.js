import express from 'express';

const port = 3000;
const app = express();
app.use(express.static("src/public"));

app.listen(port, () =>
  console.log('Example app listening on port' + port + "!")
);
