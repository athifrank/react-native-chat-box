import React,{useState, useEffect} from 'react';
import { Platform,KeyboardAvoidingView,SafeAreaView } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'
import Fire from '../../Fire'

class ChatScreen extends React.Component{
   state={
    messages:[]
   }

    get user(){
        return{
            _id:1,
            name:this.props.route.params.name
        }
    }

    componentDidMount(){
        Fire.get(message=>{
            this.setState(msg=>({
                messages:GiftedChat.append(msg.messages,message)
            }))
        })
    }

    componentWillUnmount(){
        Fire.off()
    }
    
    render(){
        const chat =<GiftedChat 
        messages={this.state.messages}
        onSend={Fire.send}
        user={this.user}
        />
        
        if(Platform.OS==='android'){
            return(
                <KeyboardAvoidingView style={{flex:1}} behavior="padding" keyboardVerticalOffset={30} enabled>
                  {chat}
                </KeyboardAvoidingView>
            )
        }else{
            return <SafeAreaView style={{flex:1}}>{chat}</SafeAreaView>
        }
    }
    
    
}

export default ChatScreen;
