import React from 'react'; 
import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native'; 
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type RootStackParamList = {
  HomeScreen: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList>;

const SignInScreen = ({navigation}: Props) => { 
	return ( 
    <View style={styles.signInScreen}> 
      <TextInput></TextInput>
      <Pressable onPress={() => navigation.navigate('HomeScreen')} style={styles.btn}>
        <Text style={styles.btnText}>로그인</Text>
      </Pressable>
      <Pressable>
        <Text style={styles.signUpText}>회원가입</Text>
      </Pressable>
    </View> 
    ) 
  } 

const styles = StyleSheet.create({ 
	signInScreen: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#fff'
      
  },
  btn: {
    justifyContent: 'center',
    width: '80%',
    height: 50,
    backgroundColor: '#EE3E36',
  },
  btnText: {
    textAlign: 'center'
  },
  signUpText: {
    textDecorationLine: 'underline',
    marginVertical: 15,
  }
}) 
export default SignInScreen;