const express = require('express');
const bodyParser = require('body-parser');
// Needed for task 1
// const { WebhookClient } = require('dialogflow-fulfillment');

// Needed for task 2
const store = require('./store.js');

// Needed for task 4
const { Permission } = require('actions-on-google');


const PORT = 1234;
const app = express();
app.use(bodyParser.json());

app.post('/', (req, res) => {
	
	
	/* WRITE YOUR CODE HERE */
	
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
