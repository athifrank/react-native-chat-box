import firebase from 'firebase'

class Fire{
    constructor(){
        this.init();
        this.checkAuth();
    }

    init=()=>{
        if(!firebase.apps.length){
            firebase.initializeApp({
                apiKey: "AIzaSyBO7eKdCefHdVZchcqI8GY7XQkoilpyakQ",
                authDomain: "chat-2b606.firebaseapp.com",
                databaseURL: "https://chat-2b606.firebaseio.com",
                projectId: "chat-2b606",
                storageBucket: "chat-2b606.appspot.com",
                messagingSenderId: "431127939783",
                appId: "1:431127939783:web:9aa0cbe3ab8bbc25150ce2",
                measurementId: "G-TF2JMM7VNM"
              })
        }
    }

    checkAuth=()=>{
        firebase.auth().onAuthStateChanged(user=>{
            if(!user){
                firebase.auth().signInAnonymously();
            }
        })
    }

    send=messages=>{
        messages.forEach(item=>{
            const message={
                text:item.text,
                timestamp:firebase.database.ServerValue.TIMESTAMP,
                user:item.user
            }
            this.db.push(message)
        })
    }


    parse=message=>{
        const {user,text,timestamp}=message.val()
        const {key:_id}=message
        const createdAt=new Date(timestamp)
        return{
            _id,
            createdAt,
            text,
            user
        }
    }

    get=callback=>{
        this.db.on('child_added',snapchat=>callback(this.parse(snapchat)))
    }

    off(){
        this.db.off()
    }

    get db(){
        return firebase.database().ref('messages')
    }

    get uid(){
        return (firebase.auth().currentUser || {}).uid
    }
}


export default new Fire();