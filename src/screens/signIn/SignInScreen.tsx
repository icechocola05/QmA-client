import React from 'react'; 
import { View, Text, StyleSheet, Pressable } from 'react-native'; 
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type RootStackParamList = {
  HomeScreen: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList>;

const SignInScreen = ({navigation}: Props) => { 
	return ( 
    	<View style={styles.signInScreen}> 
      <Text>SignInScreen</Text> 
      <Pressable onPress={()=>navigation.navigate('HomeScreen') }>
        <Text>
          SignIn
        </Text>
      </Pressable>
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