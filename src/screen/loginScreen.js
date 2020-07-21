import React, { useState } from 'react';
import { Text, View, Button, StyleSheet, TextInput ,TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons'

const LoginScreen = ({ params, navigation }) => {
    const [name, setName] = useState('')
    return (
        <View style={styles.container}>
            <View style={{ marginHorizontal: 32}}>
                <Text style={styles.header}>Username</Text>
            </View>
            <TextInput
                style={styles.input}
                placeholder="Enter username"
                onChangeText={
                    name => {
                        setName(name);
                    }
                }
                value={name}
            />
            <View style={{alignItems:"flex-end",marginTop:64}}>
               <TouchableOpacity style={styles.continue} onPress={() => navigation.navigate('Home', { name: 'athi' })}>
                  <Ionicons name="md-arrow-round-forward" size={24} color="#FFF"/>
               </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:300,
        marginLeft:40
    },
    header: {
        fontWeight: "800",
        fontSize: 30,
        color: "#514E5A",
        marginTop: 32,
        marginLeft:-25
    },
    input:{
        marginTop:32,
        height:50,
        borderWidth:StyleSheet.hairlineWidth,
        borderColor:'#BAB7C3',
        borderRadius:30,
        paddingHorizontal:16,
        color:'#514E5A',
        fontWeight:"600"
    },
    continue:{
        width:70,
        height:70,
        borderRadius:70/2,
        backgroundColor:"#9075E3",
        alignItems:"center",
        justifyContent:"center"
    }
});


export default LoginScreen;
