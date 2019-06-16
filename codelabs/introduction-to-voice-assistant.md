author: Mathias Johan Johansen and Ingrid Grønlie Guren 
id: introduction-to-voice-assistant

<a name="introductiontovoiceassistantwithgooglehome"></a>

#Introduction to Voice Assistant with Google Home

<a name="welcome!👋"></a>

##Welcome ! 👋

Welcome to this workshop: An introduction to Voice Assistant with Google Cloud. 

The code is split in X part. First you will get to do tasks 

<a name="conceptsandtools"></a>

##Concepts and tools

What we will be creating today is an app for Google Assistant. Google Assistant is the software that enables different 
devices, such as Android phones and the Google Home smart speaker, to have fluent conversations with a user. 

Google Assistant creates one common interface for all these pieces of hardware, allowing us to support them all with a 
single implementation. The only thing that might change between devices is what kind of inputs and outputs they support.

For instance: a Google Home smart speaker does not have a screen limiting the types of responses it can show to the user.
But the same type of response is treated in the same way across devices.

This workshop will focus mainly on the audio interaction, but there are other possibilities such as cards with images, 
Call to Action elements and more.

To understand the different parts of an interaction between the user and our app we need to understand the concepts 
<em>conversation</em>, <em>intent</em> and <em>fulfillment</em>.

<a name="conversation"></a>

###Conversation

A conversation is the overarching and simplest concept we need to know. It is simply all communications between the user
and Google Assistant, starting when the user requests which app to talk to, ending when either the user or the app 
requests the conversation to end. 

So long as the conversation is active the app will respond to any request by the user. Before and after the conversation
the general Google Assistant app is the one that will respond.

<a name="intents"></a>

####Intents

An intent can be understood as a single type of request. The user will state their intent to the app, and it must 
understand what the user intends and respond properly. 

For instance, an intent can be the user saying 'Hello' or 'Good morning'. Even though those are different ways of 
greeting the app, the app can consider these to be the same intent and answer both with the same or a similar answer.

On the other hand. Should the user ask for the temperature outside that would be a different intent entirely.

<a name="fulfillment"></a>

####Fulfillment

Every user intent needs to be fulfilled. Most intents will probably not have custom fulfillment but rather a general 
answer such as "Sorry, I can't help you with that". As developers it is our job to identify which intents 
needs to be answered, and how to answer them. 

To help us with this we have a set of tools provided us by Google. Making it a quite easy thing to get started at.

<a name="actionsongoogle"></a>

###Actions on Google

The first tool we will use is Actions on Google. Together with a tool called Dialogflow it will do most of the difficult 
magic concerning understanding user intents. It is through Actions on Google that we create our action which can be 
understood as the app.

If our backend were to communicate directly with the actions requests, it would look something like below. 

![Direct fulfillment](../images/json-conversation.png)
* borrowed from [Google](https://developers.google.com/actions/build/json/) under the [Creative commons V3 licence](https://creativecommons.org/licenses/by/3.0/)

Actions on Google uses POST requests with a JSON payload with a bunch of information to communicate with the 
fulfillment service. The action will have done the rough work concerning speech to text, but the intent matching 
would be up to our app. Thankfully Google have also created Dialogflow which will help us to do that.

<a name="dialogflow"></a>

###Dialogflow

Dialogflow is a tool created to manage intents and train different agents to recognize the intent of the user. 
We simply need to specify which intents we want, what data will be supplied and examples of how they can be phrased by
the user.

Dialogflow can also do simple intent fulfillment answering simple questions where no custom logic or data store is 
required. But in most cases we will want Dialogflow to use our existing or new backend service to answer many of, 
if not all, our intents.

So in our case we need to use both Actions on Google, Dialogflow and our own backend service like in the figure below.

![Dialogflow fulfillment](../images/json-dialogflow.png)
* borrowed from [Google](https://developers.google.com/actions/build/json/) under the [Creative commons V3 licence](https://creativecommons.org/licenses/by/3.0/)

Communicating with Dialogflow is a lot easier than communicating with Actions on Google. Dialogflow will have detected 
the user intent as well as having done work parsing any specified parameters into a manageable json format. Our backend
will only need to parse that json and do the required task.

A typical request will look

<a name="dialogflowfulfillmentlibrary"></a>

#####Dialogflow fulfillment library

<a name="actionsongooglelibrary"></a>

#####Actions on Google library

<a name="developertools"></a>

###Developer tools

<a name="ngrok"></a>

####Ngrok



<a name="installation&setup"></a>

##Installation & setup

<a name="requirementsfortheworkshop:"></a>

###Requirements for the workshop:
 - Your own Google Account
 - [Nodejs](https://nodejs.org/en/download/) installed on your computer
 
Without these requirements fulfilled you will not be able to do the workshop. 

<a name="installation"></a>

###Installation

Start by installing [Nodejs](https://nodejs.org/en/download/).
You can verify that it is correctly installed by typing `node -v` in the terminal.

<a name="httpsconnection"></a>

####Https connection

We need https connection for running the Dialogflow commands.  

Registrere på ngrok.com/io



To run the application, run `npm i && npm run dev`, application is available on [http://localhost:1234](http://localhost:1234)

To run ngrok go to ngrok.com and register. Then run step 3 in the setup to connect ypur account `./ngrok authtoken [your auth token]`. Then run `./ngrok http 1234` to start the http tunnel. Copy the https url given in the terminal into the webhook address in the tab fullfilment in Dialogflow.



<a name="setup"></a>

###setup

For this workshop you will need a Google account. 

 - Go to [Google Actions](https://developers.google.com/actions/) to get started.

 - Go to Actions Console
 
 
<a name="createyourfirstproject"></a>

###Create your first project

 - Add/Import Project
 
  * Accept Terms of Service and choose Country of residence.
  * Click "Agree and Continue"
  
 - Enter the name of you project _Voice Assistant Workshop_
 - Let the language for your Actions project be _English_
 - Click Create Project
 
Wait while the project is being created 



<a name="dialogflow-1"></a>

###Dialogflow

 - Go to [Dialogflow](https://dialogflow.com/)
 - Sign in with your Google Account
 - Let Dialogflow get permission to your Google Account 
 
 
 Review your account settings
  - Choose country or territory (Norway)
  - Accept Terms of Service
  
  - Click "Create Agent"
  
<a name="createyouragent"></a>

####Create your agent

We are now going to create your first agent: 
- Give the agent a name: _Voice-assistant-workshop-agent_
- Language: _English - en_
- Timezone: GMT +2:00
- Google Project: voice-assistant-workshop

Click "Create"
 
 
 
<a name="inspectingtheagent"></a>

######Inspecting the agent
 Let's inspect the agent we have created: 
 
 
 The Service Account: Used for accessing the 
 

<a name="maintasks:"></a>

##Main tasks:
<a name="dronescream"></a>

###Drones Cream

"We deliver great ice cream delivered with drones"


Pay the drone when you get the cone. 


Give menu

Who are you?
Where are you?
What ice cream do you want?

Check if the ice cream is still available?



<a name="part1:dialogflow"></a>

##Part 1: Dialogflow
Duration: 10:00

<a name="dialogflowintentfulfillment"></a>

###Dialogflow intent fulfillment

In this part you will learn to use use Dialogflow to create your own intent fulfillment.
The tasks you create will be used later in the workshop. 

<a name="task1"></a>

####Task 1

Create an intent welcoming the user to the Drone's Cream virtual store using only Dialogflow. 
The intent should answer the user with a welcome prompt. 

The intent should answer prompts such as "Hi", "hello", "good morning" etc.

The response should include the time of day if the prompt has it. I.e: 
If the prompt is "Good afternoon" the answer should also start with "Good afternoon".

Hint: We want to create our own welcome intent, so you will have to delete the existing welcome intent (_Default Welcome Intent_).    

<a name="task2"></a>

####Task 2

Create an intent listing the following inventory for the virtual Ice Cream shop: Vanilla, Chocolate, Mint and Strawberry. 
Do this using using only Dialogflow. 

The intent should answer questions such as "What kinds of flavours do you have?" and "What ice creams do you offer?".

<a name="task3"></a>

####Task 3

Dialogflow support enums to create an easier concept of available input parameters on an intent. Create your own intent _iceCreamFlavour_ with all the avilable flavours of Drone's Cream.  

<a name="task4"></a>

####Task 4

Create an intent to order a number of cones of ice cream using using only Dialogflow. The user must supply one 
flavour and the number of cones as required parameters. In addition the user may supply the location he or she wants the 
ice cream delivered. 

If either flavour or number of cones is missing from the request the user should receive a prompt to supply these.

The answer should include the order details including location if it is supplied.



<a name="part2:webhooks"></a>

##Part 2: Webhooks
Duration: 20:00

<a name="webhookintentfulfillment"></a>

###Webhook intent fulfillment

In this part you will need to adapt the intents created in part 1 to be answered by a webhook instead of Dialogflow.

<a name="task1-1"></a>

####Task 1

Enable webhook fulfillment for the intent created in [task 1 in part 1](#task1).

Create a simple express webhook answering the intent with the same response as Dialogflow did as well as fallback 
handling if unknown intents are routed to the webhook.

Test your webhook using either the testing tool in Dialogflow or Actions by Google.

Hint: You will have to 

<a name="task2-1"></a>

####Task 2

Convert the intent from [task 3 in part 1](#task3) to be answered by your webhook. This time the answer should reflect the 
actual inventory of the Ice Cream store. We have provided you with a small service with in-memory inventory handling 
which should contain all the necessary business logic in the file `store.js`.

Have the answer to the prompt include both which flavours are in stock and which are out of stock. The number of cones
remaining of each does not need to be included.

Test your webhook using either the testing tool in Dialogflow or Actions by Google.

<a name="task3-1"></a>

####Task 3

Convert the intent from task thfourree [???] in part one to be answered by your webhook. This time the answer should reflect the 
actual inventory of the Ice Cream store. 

If there is not enough cones of the requested flavour left the response should reflect that. If there are enough cones 
left the inventory numbers should be updated.

Test your webhook using either the testing tool in Dialogflow or Actions by Google.

<a name="task4-1"></a>

####Task 4

<a name="a)"></a>

#####a)

In this task you need to update the intent fulfillment from the previous task. 

As specified in task four in part one, location is an optional parameter. But in order to fulfill and order, our drones 
need to know where to deliver the ice cream cones. To get this knowledge you will ask the user for permission to get the 
location of the device used to communicate the order.

If requests contain location we can use the same logic as in the previous task. Otherwise, request the permission to get 
device location from the user.

Create a new intent handling the response to the permission request submitted by the user. This request must handle both 
getting the permission as well as being denied the permission.

Hint: [Permission request granted](../../json/request/permission-granted.json)

<a name="b)"></a>

#####b)

Now that we can get the location of the device our service is ready to start serving the community. Unfortunately it 
will keep asking for permission to get device location from users who have already consented.

Update your service to check if the user already have consented before asking for the location again.




<a name="andthat'sit!⎈"></a>

##And that's it! ⎈

<a name="feedback?😇"></a>

###Feedback? 😇

We would love to get feedback to improve our workshop. You are awesome if you have time to fill out . It is of course anonymous.

<a name="anyquestions?"></a>

###Any questions?

Contact us on [@mathjoh91](https://twitter.com/mathjoh91) or [@ingridguren](https://twitter.com/ingridguren).
