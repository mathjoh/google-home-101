const express = require('express');
const bodyParser = require('body-parser');
// Needed for task 1
const { WebhookClient } = require('dialogflow-fulfillment');

// Needed for task 2
const store = require('./store.js');

// Needed for task 4
const { Permission } = require('actions-on-google');


const PORT = 1234;
const app = express();
app.use(bodyParser.json());

app.post('/', (req, res) => {
    const agent = new WebhookClient({ request: req, response: res });

    const welcome = agent => {
        if (agent.parameters.timeOfDay) {
            agent.add(`Good ${timeOfDay} Welcome to Drone's Cream. We supply the world with the best possible ice cream, anywhere, anytime.`);

        } else {
            agent.add('Welcome to Drone\'s Cream. We supply the world with the best possible ice cream, anywhere, anytime.');
        }
    };

    const fallback = agent => {
        agent.add(`I'm sorry. Your request was not recognized. Please try again.`);
    };

    let intentMap = new Map();
    intentMap.set('welcome', welcome);
    intentMap.set(null, fallback);

    agent.handleRequest(intentMap)
	// Debug logging
	// console.log('Dialogflow Request headers: ' + JSON.stringify(req.headers));
  	// console.log('Dialogflow Request body: ' + JSON.stringify(req.body));

	// console.log('WebhookClient agent version: ', agent.agentVersion);
	// console.log('WebhookClient intent: ', agent.intent);
	// console.log('WebhookClient action: ', agent.action);
	// console.log('WebhookClient parameters: ', agent.parameters);
	// console.log('WebhookClient contexts: ', agent.contexts);
	// console.log('WebhookClient requestSource: ', agent.requestSource);
	// console.log('WebhookClient originalRequest: ', agent.originalRequest);
	// console.log('WebhookClient query: ', agent.query);
	// console.log('WebhookClient locale: ', agent.locale);
	// console.log('WebhookClient session: ', agent.session);
	// console.log('WebhookClient consoleMessages: ', agent.consoleMessages);
	// console.log('WebhookClient alternativeQueryResults: ', agent.alternativeQueryResults);

});

app.listen(PORT, () =>
    console.log(
        `Node application is listening on port ${PORT} and ready for request!`
    ),
);
