const TelegramBot = require('node-telegram-bot-api');
const botToken = 'YOUR_BOT_TOKEN_HERE';
const bot = new TelegramBot(botToken, { polling: true });
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');

const {db}=require("PATH_TO_FIREBASE.JS")

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Welcome to the FridayAuraBot!\nHow can I assist you?\nPossible use cases:\n\/todo: for appending to a todolist\n\/idea: for random ideas\n\/thoughts: for deep thoughts\n\/blog: for adding blog titles\n\/showtodo: to show todolist\n\/done: to remove item from todolist\n\/showtitles to show all blog titles');
});

bot.onText(/\/todo/, async (msg) => {
  const chatId = msg.chat.id;
  item=msg.text.substring(5)
  //item is where we store user input
  const data = {
  title: item,
  timestamp: FieldValue.serverTimestamp()
  };//JSON format data to be uploaded

  const res = await db.collection('todolist').doc(item).set(data);
  
  bot.sendMessage(chatId, `Item appended to to do list:${item}`);
});

bot.onText(/\/showtodo/, async (msg) => {
  
  const chatId = msg.chat.id;
  const todoRef = db.collection('todolist');
  const snapshot = await todoRef.get();//creating a snapshot of the todo reference to access and display all documents
  snapshot.forEach(doc => {
      console.log(doc.id, '=>', doc.data());
      bot.sendMessage(chatId, `-${doc.data().title}\n`);
  })
  
});

bot.onText(/\/done/, async (msg) => {
  const chatId = msg.chat.id;
  item=msg.text.substring(5)
  let flag = false;
  const todoRef = db.collection('todolist');
  const snapshot = await todoRef.get();
  snapshot.forEach(doc => {
      //console.log(doc.id, '=>', doc.data());
    if(item.trim()===doc.data().title.trim())
    {
      flag=true;
    }
  })
  if(flag)
  {
  const res = await db.collection('todolist').doc(item).delete();  
  bot.sendMessage(chatId, `Congratulations! You have removed "${item}" from your to do list`);
  }
  else
  {
    bot.sendMessage(chatId, `Sorry! "${item}" was never on the to do list`);
  }
});

bot.onText(/\/idea/, async (msg) => {
  const chatId = msg.chat.id;
  item=msg.text.substring(5)
  const data = {
  title: item,
  timestamp: FieldValue.serverTimestamp()
  };

  const res = await db.collection('ideas').add({
  title: item,
  timestamp: FieldValue.serverTimestamp()
  });
  bot.sendMessage(chatId, `idea "${item}" has been recorded with ref id: ${res.id}`);
});

bot.onText(/\/thoughts/, async (msg) => {
  const chatId = msg.chat.id;
  item=msg.text.substring(10)
  const data = {
  dump: item,
  timestamp: FieldValue.serverTimestamp()
  };

  const res = await db.collection('thoughts').add({
  dump: item,
  timestamp: FieldValue.serverTimestamp()
  });
  bot.sendMessage(chatId, `a reflective deep thought\n"${item} "\n has been recorded with ref id: ${res.id}`);
});

bot.onText(/\/blog/, async (msg) => {
  const chatId = msg.chat.id;
  item=msg.text.substring(5)
  const data = {
  blogtitle: item,
  timestamp: FieldValue.serverTimestamp()
  };

  const res = await db.collection('blog').doc(item).set(data);
  bot.sendMessage(chatId, `a blog title \n"${item} "\n has been added`);
});

bot.onText(/\/showtitles/, async (msg) => {
  const chatId = msg.chat.id;
  const todoRef = db.collection('blog');
  const snapshot = await todoRef.get();
  await bot.sendMessage(chatId,"The titles are:\n")
  snapshot.forEach(doc => {
      //console.log(doc.id, '=>', doc.data());
      bot.sendMessage(chatId, `-${doc.data().blogtitle}\n`);
  })
});


bot.on('polling_error', (error) => {
  // console.log(error)
  console.log("Polling error code: ",error.code);
  console.log("Error Message: ", error.message);
  console.log("Stack trace: ", error.stack);
})
