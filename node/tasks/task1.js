const express = require('express');
const bodyParser = require('body-parser');
const { WebhookClient } = require('dialogflow-fulfillment');

const PORT = 1234;
const app = express();
app.use(bodyParser.json());

app.post('/', (req, res) => {

});

app.listen(PORT, () =>
    console.log(
        `Node application is listening on port ${PORT} and ready for request!`
    ),
);
