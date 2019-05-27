author: Mathias Johan Johansen and Ingrid Grønlie Guren 
id: introduction-to-voice-assistant

<a name="introductiontovoiceassistantwithgooglehome"></a>

#Introduction to Voice Assistant with Google Home

<a name="installation"></a>

##Installation


<a name="setup"></a>

##Setup

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



<a name="dialogflow"></a>

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



<a name="partone:"></a>

##Part one:
<a name="dialogflowintentfulfillment"></a>

###Dialogflow intent fulfillment

<a name="task1"></a>

####Task 1

Create an intent welcoming the user to the Drone's Cream virtual store using only Dialogflow. 
The intent should answer the user with a welcome prompt. 

The intent should answer prompts such as "Hi", "hello", "good morning" etc.

The response should include the time of day if the prompt has it. I.e: 
If the prompt is "Good afternoon" the answer should also start with "Good afternoon". 

<a name="task2"></a>

####Task 2

Make the intent from task 1 your default welcoming intent, 
being read when a user starts a conversation with your application.

<a name="task3"></a>

####Task 3

Create an intent listing the following inventory for the virtual Ice Cream shop: Vanilla, Chocolate, Mint and Strawberry. 
Do this using using only Dialogflow. 

The intent should answer questions such as "What kinds of flavours do you have?" and "What ice creams do you offer?".

<a name="task4"></a>

####Task 4

Create an intent to order a number of cones of ice cream using using only Dialogflow. The user must supply one 
flavour and the number of cones as required parameters. In addition the user may supply the location he or she wants the 
ice cream delivered. 

If either flavour or number of cones is missing from the request the user should receive a prompt to supply these.

The answer should include the order details including location if it is supplied.



<a name="parttwo:"></a>

##Part two:
<a name="webhookintentfulfillment"></a>

###Webhook intent fulfillment

In this part you will need to adapt the intents created in part one to be answered by a webhook instead of dialogflow. 

<a name="task1-1"></a>

####Task 1

Enable webhook fulfillment for the intent created in task one in part one.

Create a simple express webhook answering the intent with the same response as Dialogflow did as well as fallback 
handling if unknown intents are routed to the webhook.

Test your webhook using either the testing tool in Dialogflow or Actions by Google.

<a name="task2-1"></a>

####Task 2

Convert the intent from task three in part one to be answered by your webhook. This time the answer should reflect the 
actual inventory of the Ice Cream store. We have provided you with a small service with in-memory inventory handling 
which should contain all the necessary business logic in the file `store.js`.

Have the answer to the prompt include both which flavours are in stock and which are out of stock. The number of cones
remaining of each does not need to be included.

Test your webhook using either the testing tool in Dialogflow or Actions by Google.

<a name="task3-1"></a>

####Task 3

Convert the intent from task thfourree in part one to be answered by your webhook. This time the answer should reflect the 
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
