const express = require('express');
const bodyParser = require('body-parser');
const { WebhookClient } = require('dialogflow-fulfillment');
const { Permission } = require('actions-on-google');
const PORT = 1234;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/health', (req, res) => res.send('Application is up and running'));
app.get('/', (req, res) => res.send('helloooo'));

app.post('/', (req, res) => {
	console.log('Dialogflow Request headers: ' + JSON.stringify(req.headers));
  	console.log('Dialogflow Request body: ' + JSON.stringify(req.body));
	const agent = new WebhookClient({ request: req, response: res });

	console.log('WebhookClient agent version: ', agent.agentVersion);
	console.log('WebhookClient intent: ', agent.intent);
	console.log('WebhookClient action: ', agent.action);
	console.log('WebhookClient parameters: ', agent.parameters);
	console.log('WebhookClient contexts: ', agent.contexts);
	console.log('WebhookClient requestSource: ', agent.requestSource);
	console.log('WebhookClient originalRequest: ', agent.originalRequest);
	console.log('WebhookClient query: ', agent.query);
	console.log('WebhookClient locale: ', agent.locale);
	console.log('WebhookClient session: ', agent.session);
	console.log('WebhookClient consoleMessages: ', agent.consoleMessages);
	console.log('WebhookClient alternativeQueryResults: ', agent.alternativeQueryResults);
	console.log('WebhookClient alternativeQueryResults: ', agent.alternativeQueryResults);

  	const welcome = agent => {
  		agent.add('Welcome to the ice cream super shop!');
  	};

  	const goodSomething = agent => {
  		agent.add(`Good ${agent.parameters.timeofday} to you too!`);
  	};

  	const findLocation = agent => {
  		const conv = agent.conv(); // agent.requestSource need to be ACTIONS_ON_GOOGLE or conv will be null
  		if (conv) {
  			conv.ask(new Permission({
	  			context: 'To know where to deliver the ice cream',
	  			permissions: 'DEVICE_PRECISE_LOCATION',
	  		}));
  			agent.add(conv);
  			agent.context.set({ name: 'pre_permission_intent', lifespan: 1, parameters: { name: agent.intent } }); // no spaces allowed in these names
	  		agent.context.set({ name: 'pre_permission_params', lifespan: 1, parameters: agent.parameters });
  		} else {
  			agent.add('Your current device does not support location data so unfortunately I do not know.');
  		}
  	};

  	const askName = agent => {
  		const conv = agent.conv(); // agent.requestSource need to be ACTIONS_ON_GOOGLE or conv will be null
  		if (conv) {
  			conv.ask(new Permission({
	  			context: 'To know who your are',
	  			permissions: 'NAME',
	  		}));
	  		agent.context.set({ name: 'pre_permission_intent', lifespan: 1, parameters: { name: agent.intent } });
	  		agent.context.set({ name: 'pre_permission_params', lifespan: 1, parameters: agent.parameters });

  			agent.add(conv);
  		} else {
  			agent.add('Your current device does not know who you are so I cannot help you.');
  		}
  	};

  	const gotPermission = agent => {
  		console.log('pre_permission_intent: ', agent.context.get('pre_permission_intent'));
  		agent.add('Thank you for the permission!');
  	};

  	const fallback = agent => {
  		agent.add(`I didn't understand`);
    	agent.add(`I'm sorry, can you try again?`);
  	};

  	let intentMap = new Map();
  	intentMap.set('Default Welcome Intent', welcome);
  	intentMap.set('Good something', goodSomething);
  	intentMap.set('Find location', findLocation);
  	intentMap.set('Ask name', askName);
  	intentMap.set('Default Fallback Intent', fallback);
  	intentMap.set('Got permission', gotPermission);
	intentMap.set(null, fallback);

  	agent.handleRequest(intentMap)
});

app.listen(PORT, () =>
    console.log(
        `Node application is listening on port ${PORT} and ready for request!`
    ),
);
