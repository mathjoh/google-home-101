# Node application

## Development

To run the application, run `npm i && npm run dev`, application is available on [http://localhost:1234](http://localhost:1234)

To run ngrok go to ngrok.com and register. Then run step 3 in the setup to connect your account 
`./ngrok authtoken [your auth token]`.
Then run `./ngrok http 1234` to start the http tunnel. Copy the https url given in the terminal into the webhook address in the tab fullfilment in Dialogflow.

## Endpoints

 - Health endpoint: /health
