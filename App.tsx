import React from 'react'; 
import { View, Text, StyleSheet } from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack'; 
import HomeScreen from './src/screens/HomeScreen';
import SignInScreen from './src/screens/signIn/SignInScreen';
  
const Stack = createStackNavigator(); 
const App = () => { 
	return ( 
        <NavigationContainer> 
            <Stack.Navigator> 
              <Stack.Screen name="SignInScreen" component={SignInScreen} options={({ }) => ({ title: '', animation: 'slide_from_right',})}/> 
              <Stack.Screen name="HomeScreen" component={HomeScreen} options={({ }) => ({ title: '', animation: 'slide_from_right',})}/> 
            </Stack.Navigator> 
        </NavigationContainer> 
    ) 
} 

const styles = StyleSheet.create({ 
	homeScreen: { 
    	flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center' 
    } 
}) 
export default App;