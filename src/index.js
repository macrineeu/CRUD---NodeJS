const express = require('express');

const app = express();

app.get('/', (request, response) => response.status(200).send('Server is Running'));

app.listen(3000, () => console.log('Server Running or port 3000'));