const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

if (process.env.NODE_ENV !== 'test') {  // Evita que se inicie el servidor en pruebas
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}

module.exports = app;  // Exporta solo el 'app' para las pruebas
