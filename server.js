import express from 'express';
import { FakeDatabaseAdapter} from './db/dbAdapter.js';

const app = express();
const fakeDb = new FakeDatabaseAdapter();
const port = 3000;


app.get('/some_resource/:id', express.json(), (req, res) => {
  const id = req.params.id;
  res.send({ id , message: fakeDb.getContent(id) });
});

app.use('*', express.json(), (req, res) => {
  res.status(400);
  res.end();
});

app.listen(port, () => console.log(`Express server is listening on localhost:${port}`));
