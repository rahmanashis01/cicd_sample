import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Hello from the serverV1' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});