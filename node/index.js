const express = require('express');
const PORT = 1234;
const app = express();

app.get('/health', (req, res) => res.send('Application is up and running'));
app.get('/', (req, res) => res.send('helloooo'));

app.listen(PORT, () =>
    console.log(
        `Node application is listening on port ${PORT} and ready for request!`
    ),
);
