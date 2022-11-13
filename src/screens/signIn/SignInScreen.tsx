import React from 'react'; 
import { View, Text, StyleSheet } from 'react-native'; 

const SignInScreen = () => { 
	return ( 
    	<View style={styles.signInScreen}> 
        	<Text>SignInScreen</Text> 
        </View> 
    ) 
  } 

const styles = StyleSheet.create({ 
	signInScreen: { 
    	flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'  
    } 
}) 
export default SignInScreen;