import * as React from 'react';
import { View, Text ,YellowBox} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import loginScreen from './src/screen/loginScreen'
import ChatScreen from './src/screen/chatScreen'

const Stack = createStackNavigator();

YellowBox.ignoreWarnings(['Setting a timer']);

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" options={{ title: 'Login' }} component={loginScreen} />
        <Stack.Screen name="Home" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;