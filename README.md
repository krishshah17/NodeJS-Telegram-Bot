# NodeJS Telegram Bot
 A telegram bot that is made using NodeJS and uses Firebase for real time data updates and CRUD functionality

### Why? 
I was looking for a way to integrate information from my google keep, where i jot down all my ideas, and from Apple Notes, where i ideate about these topics. 
The most used app on my phone is the mesaging app, it's also where i keep track of important links, write down thoughts on the go and more.
I wanted a way to replace all three with just one custom service and thus chose to build a telegram-bot

### What?
I wanted this bot to be a personal assistant, analogus to Iron Man's JARVIS (yes, a cliche!) but enough people have used that name, so i chose the next best Friday for my assistant who would scrape links, remember tasks, store future blog titles, thoughts and more (there's endless possibilities to what an AI assistant can do)

And thus my bot FridayAura was born, you ask what AURA stands for, well Artificially Intelligent Utility and Response Assistant. 

### Prerequisties

- You need to have NodeJS installed, you can check this by entering node -v
<img width="696" alt="node -v" src="https://github.com/krishshah17/NodeJS-Telegram-Bot/assets/26605210/adad27ff-e22b-4136-9884-63499bbaf77c">


- You need to have a telegram account
- You need to have a firebase account

### Setting up NodeJS

- To initliaize your NodeJS project, run the following command(-y uses default values during set up, it is optional)
```
 npm init -y
 ```

<img width="1512" alt="npm init" src="https://github.com/krishshah17/NodeJS-Telegram-Bot/assets/26605210/bf1d2821-fbd8-4c04-bed0-f75b354c73da">

- We need to install the required libraries that are the firebase as well as telegram libraries.
- To do this we can run
```
npm install nodemon node-telegram-bot-api firebase-admin
```

### Creating your telegram bot

- Search for BotFather on telegram, as the name sugeests, it handles all bots and can help you create your own.
- To start a conversation enter /start
- As you can see, to create a new bot we need to enter /newbot
- Follow the instructions and give a name to your bot, I named my bot FridayAuraBot
- The BotFather responds with vital information
  <img width="1214" alt="Telegram Bot Token" src="https://github.com/krishshah17/NodeJS-Telegram-Bot/assets/26605210/86bb9692-9362-4eeb-8bcb-ffc5744fe861">

- Safely store your bot token to use the HTTP API

### Setting up FireBase

- Create a new project

<img width="1512" alt="Firebase1" src="https://github.com/krishshah17/NodeJS-Telegram-Bot/assets/26605210/79c60210-a3ad-4198-9cb8-61af51edff16">

- Enter your project name
  
<img width="1512" alt="Firebase2" src="https://github.com/krishshah17/NodeJS-Telegram-Bot/assets/26605210/d2422ce9-21cc-4869-af95-13f21d4f2b60">

- As we don't need Google Analytics we can disable it
  
<img width="1512" alt="Firebase3" src="https://github.com/krishshah17/NodeJS-Telegram-Bot/assets/26605210/6bc51e12-9b2f-4624-a468-7bbb2b82aad9">

- Create a new firestore database under Build category
  
<img width="1512" alt="Firebase4" src="https://github.com/krishshah17/NodeJS-Telegram-Bot/assets/26605210/400c1ff4-dc9d-4d8d-8391-3293469051ab">

- Start in test mode and choose your preffered location

<img width="1512" alt="Firebase5" src="https://github.com/krishshah17/NodeJS-Telegram-Bot/assets/26605210/f2db11dc-9a2c-41e2-8813-9a2132e799a7">

- Your new FireStore database is ready and looks like this
  <img width="1512" alt="Firebase6" src="https://github.com/krishshah17/NodeJS-Telegram-Bot/assets/26605210/1bdcebcc-2fa2-4f16-a3fb-08044182c9f4">

- We need to modify the rules to allow our bot to perfrom CRUD functions (Create, Read, Update, Delete)
- We remove the if statement and publish the changes

<img width="1512" alt="Firebase7" src="https://github.com/krishshah17/NodeJS-Telegram-Bot/assets/26605210/ac68c790-cd75-4307-b4d7-d56e6fd68f05">

- Going back to the homepage of the project, we can add a web app to firebase

<img width="1512" alt="Firebase8" src="https://github.com/krishshah17/NodeJS-Telegram-Bot/assets/26605210/2349a98a-0ba1-4f7d-b1a3-59a2f60f195f">

- Again from the homepage, we go to the project settings of the web app we just added, from here we create a new service account and generate a private key

<img width="1512" alt="Firebase9" src="https://github.com/krishshah17/NodeJS-Telegram-Bot/assets/26605210/48870681-014c-4d26-af3d-ba456ab1c4eb">

- Your json file with the key is downloaded


### Code
- Clone the GitHub Repo
- Move the private key file to the project directory
- In firebase.js edit,
```
const serviceAccount=require("PATH_TO_YOUR_PRIVATE_KEY_FILE")
```
 And in index.js edit,
```
const botToken = 'ENTER_YOUR_BOT_TOKEN_HERE';
const {db}=require("PATH_TO_FIREBASE.JS")
```
Save everything and finally in the terminal type,
```
node index.js
```
### Screenshots
<img width="1212" alt="Screenshot 2023-07-15 at 10 07 52 AM" src="https://github.com/krishshah17/NodeJS-Telegram-Bot/assets/26605210/4c293c17-937f-4dbb-ac61-ec81185dd775">
<img width="1210" alt="Screenshot 2023-07-15 at 11 16 14 AM" src="https://github.com/krishshah17/NodeJS-Telegram-Bot/assets/26605210/4cb3060f-f550-4dba-af39-71b4568de26e">
<img width="1512" alt="Screenshot 2023-07-15 at 11 16 27 AM" src="https://github.com/krishshah17/NodeJS-Telegram-Bot/assets/26605210/a97b7f20-067b-4e83-9d1f-37db884ac0e2">
<img width="1213" alt="Screenshot 2023-07-17 at 11 43 00 PM" src="https://github.com/krishshah17/NodeJS-Telegram-Bot/assets/26605210/4869b58d-631a-485e-b521-6b4c49e1d659">
<img width="1211" alt="Screenshot 2023-07-17 at 11 43 10 PM" src="https://github.com/krishshah17/NodeJS-Telegram-Bot/assets/26605210/17c64c51-f763-4b3e-8c36-64618815ca71">

Note: For your Bot to work index.js needs to be running, you could host your backend code too (future updates)
### Future Enhancements:
- Always active (host on azure?)
- Reminders 
- Add description to ideas/blog titles (update functionality)
