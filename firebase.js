const {initializeApp, cert}= require("firebase-admin/app")
const {getFirestore} = require("firebase-admin/firestore")

const serviceAccount=require("PATH_TO_FIREBASE_SERVICE_ACCOUNT_PRIVATE_KEY")

initializeApp({
	credential:cert(serviceAccount)
})

const db= getFirestore()
module.exports={ db }