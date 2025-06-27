import express from 'express';
import { _config } from './config/Config';

const app = express();
const port = _config.port || 3000;

app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Hello, TypeScript + Express!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  console.log(`API Key: ${_config.apiKey}`)
});
