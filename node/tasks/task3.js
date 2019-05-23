const express = require('express');
const bodyParser = require('body-parser');
const { WebhookClient } = require('dialogflow-fulfillment');
const PORT = 1234;
const app = express();
app.use(bodyParser.json());

const store = require('./store.js');

const backend = store();

app.post('/', (req, res) => {
    const agent = new WebhookClient({ request: req, response: res });

    const welcome = agent => {
        agent.add('Welcome to Drone\'s Cream. We supply the world with the best possible ice cream, anywhere, anytime');
    };

    const flavours = agent => {
        agent.add(`We have ${backend.remainingFlavours().join(', ')} in stock, but are unfortunately out of ${backend.emptyFlavours().join(', ')}`)
    };

    const order = agent => {
        if(backend.order(agent.parameters.flavour, agent.parameters.cones)) {
            agent.add(`Thank you for purchasing ${agent.parameters.cones} cones of ${agent.parameters.flavour} ice cream.`)
        } else {
            agent.add(`Unfortunately we only have ${backend.numberOfCones(agent.parameters.flavour)} cones of ${agent.parameters.flavour} ice cream left.`)
        }
    };

    const fallback = agent => {
        agent.add('I\'m sorry. Your request was not recognized. Please try again.');
    };

    let intentMap = new Map();
    intentMap.set('welcome', welcome);
    intentMap.set('flavours', flavours);
    intentMap.set('order', order);
    intentMap.set(null, fallback);

    agent.handleRequest(intentMap)
});

app.listen(PORT, () =>
    console.log(
        `Node application is listening on port ${PORT} and ready for request!`
    ),
);
