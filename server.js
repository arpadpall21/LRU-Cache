import express from 'express';

const app = express();
const port = 3000;

app.get('/some_resource/:id', express.json(), (req, res) => {
  res.send({ id: req.params.id, message: 'Hello World!' });
});

app.use('*', express.json(), (req, res) => {
  res.status(400);
  res.end();
});

app.listen(port, () => console.log(`Express server is listening on localhost:${port}`));
