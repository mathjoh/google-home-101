const express = require('express');
const bodyParser = require('body-parser');
const { WebhookClient } = require('dialogflow-fulfillment');
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

  	const welcome = agent => {
  		agent.add('Welcome to the ice cream super shop!');
  	}

  	const goodSomething = agent => {
  		agent.add('Good ' + agent.parameters.timeofday + ' to you too!');
  	}

  	const fallback = agent => {
  		agent.add(`I didn't understand`);
    	agent.add(`I'm sorry, can you try again?`);
  	}

  	let intentMap = new Map();
  	intentMap.set('Default Welcome Intent', welcome);
  	intentMap.set('Good something', goodSomething);
  	intentMap.set('Default Fallback Intent', fallback);
  	agent.handleRequest(intentMap)
});

app.listen(PORT, () =>
    console.log(
        `Node application is listening on port ${PORT} and ready for request!`
    ),
);
