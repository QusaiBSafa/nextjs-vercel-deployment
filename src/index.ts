import express from 'express';
import { helloHandler, goodbyeHandler } from './routes/api';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/hello', helloHandler);
app.get('/api/goodbye', goodbyeHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});