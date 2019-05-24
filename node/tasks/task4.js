const express = require('express');
const bodyParser = require('body-parser');
const { WebhookClient } = require('dialogflow-fulfillment');
const { Permission } = require('actions-on-google');
const store = require('./store.js');

const PORT = 1234;
const app = express();
app.use(bodyParser.json());
const backend = store();

app.post('/', (req, res) => {
    const agent = new WebhookClient({ request: req, response: res });

    const welcome = agent => {
        if (agent.parameters.timeOfDay) {
            agent.add(`Good ${timeOfDay} Welcome to Drone's Cream. We supply the world with the best possible ice cream, anywhere, anytime.`);

        } else {
            agent.add(`Welcome to Drone's Cream. We supply the world with the best possible ice cream, anywhere, anytime.`);
        }
    };

    const flavours = agent => {
        agent.add(`We have ${backend.remainingFlavours().join(', ')} in stock, but are unfortunately out of ${backend.emptyFlavours().join(', ')}`)
    };

    const order = agent => {
        if (agent.parameters.location) {
            orderIceCream(agent, agent.parameters);
        } else if (getLocationFromPermission(agent)) {
            orderIceCream(agent, { ...agent.parameters, location: getLocationFromPermission(agent) });
        } else {
            getLocation(agent);
        }
    };

    const finishOrder = agent => {
        const gotPermission = agent.context.get('actions_intent_permission');
        if (gotPermission.parameters.PERMISSION) {
            const parameters = agent.context.get('params').parameters;
            orderIceCream(agent, { ...parameters, location: getLocationFromPermission(agent) });
        } else {
            agent.add('If we cannot get your location, we cannot finish your order.');
        }
    };

    const getLocation = agent => {
        const conv = agent.conv();
        if (conv) {
            conv.ask(new Permission({
                context: 'To know where to deliver your ice cream',
                permissions: 'DEVICE_PRECISE_LOCATION',
            }));
            agent.add(conv);
            agent.context.set({ name: 'params', lifespan: 1, parameters: agent.parameters });
        } else {
            agent.add('Your current device does not support location data. So we cannot deliver any ice cream to you.');
        }
    };

    const orderIceCream = (agent, parameters) => {
        if(backend.order(parameters.flavour, parameters.cones)) {
            agent.add(`Thank you for purchasing ${parameters.cones} cones of ${parameters.flavour} ice cream. It will be delivered to ${parameters.location} immediately`);
        } else {
            agent.add(`Unfortunately we only have ${backend.numberOfCones(parameters.flavour)} cones of ${parameters.flavour} ice cream left.`);
        }
    };

    const getLocationFromPermission = agent => {
        if (agent.originalRequest &&
            agent.originalRequest.payload &&
            agent.originalRequest.payload.user &&
            agent.originalRequest.payload.user.permissions &&
            agent.originalRequest.payload.user.permissions.includes('DEVICE_PRECISE_LOCATION')) {
            return agent.originalRequest.payload.device.location.formattedAddress;
        }
        return null;
    };

    const fallback = agent => {
        agent.add(`I'm sorry. Your request was not recognized. Please try again.`);
    };

    let intentMap = new Map();
    intentMap.set('welcome', welcome);
    intentMap.set('flavours', flavours);
    intentMap.set('order', order);
    intentMap.set('finishOrder', finishOrder);
    intentMap.set(null, fallback);

    agent.handleRequest(intentMap)
});

app.listen(PORT, () =>
    console.log(
        `Node application is listening on port ${PORT} and ready for request!`
    ),
);
