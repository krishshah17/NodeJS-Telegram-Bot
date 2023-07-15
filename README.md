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
<img width="696" alt="Screenshot 2023-07-14 at 11 44 56 PM" src="https://github.com/krishshah17/NodeJS-Telegram-Bot/assets/26605210/adad27ff-e22b-4136-9884-63499bbaf77c">


- You need to have a telegram account
- You need to have a firebase account

### Setting up NodeJS

- To initliaize your NodeJS project, run the following command(-y uses default values during set up, it is optional)
```
 npm init -y
 ```

<img width="1512" alt="Screenshot 2023-07-15 at 12 05 26 AM" src="https://github.com/krishshah17/NodeJS-Telegram-Bot/assets/26605210/bf1d2821-fbd8-4c04-bed0-f75b354c73da">

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
- Safely store your bot token to use the HTTP API

### Setting up FireBase

- Create a new project

<img width="1512" alt="Screenshot 2023-07-15 at 12 11 04 AM" src="https://github.com/krishshah17/NodeJS-Telegram-Bot/assets/26605210/79c60210-a3ad-4198-9cb8-61af51edff16">

- Enter your project name
  
<img width="1512" alt="Screenshot 2023-07-15 at 12 11 26 AM" src="https://github.com/krishshah17/NodeJS-Telegram-Bot/assets/26605210/d2422ce9-21cc-4869-af95-13f21d4f2b60">

- As we don't need Google Analytics we can disable it
  
<img width="1512" alt="Screenshot 2023-07-15 at 12 12 01 AM" src="https://github.com/krishshah17/NodeJS-Telegram-Bot/assets/26605210/6bc51e12-9b2f-4624-a468-7bbb2b82aad9">

- Create a new firestore database under Build category
  
<img width="1512" alt="Screenshot 2023-07-15 at 12 13 25 AM" src="https://github.com/krishshah17/NodeJS-Telegram-Bot/assets/26605210/400c1ff4-dc9d-4d8d-8391-3293469051ab">

- Start in test mode and choose your preffered location
  
- Your new FireStore database is ready and looks like this
- We need to modify the rules to allow our bot to perfrom CRUD functions (Create, Read, Update, Delete)
- We remove the if statement and publish the changes
- Going back to the homepage of the project, we can add a web app to firebase 
- Again from the homepage, we go to the project settings of the web app we just added, from here we create a new service account and generate a private key
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

Note: For your Bot to work index.js needs to be running, you could host your backend code too (future updates)
### Future Enhancements:
- Always active (host on azure?)
- Reminders 
- Add description to ideas/blog titles (update functionality)
