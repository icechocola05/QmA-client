import React from 'react'; 
import { View, Text, StyleSheet } from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack'; 
import HomeScreen from './src/screens/HomeScreen';
import SignInScreen from './src/screens/signIn/SignInScreen';
import { QuestionListScreen } from './src/screens/question/QuestionListScreen';
import { WriteQuestionScreen } from './src/screens/question/WriteQuestionScreen';
import { QuestionScreen } from './src/screens/question/QuestionScreen';
import { AnswerListScreen } from './src/screens/answer/AnswerListScreen';
  
const Stack = createStackNavigator(); 
const App = () => { 
	return ( 
        <NavigationContainer> 
            <Stack.Navigator> 
              <Stack.Screen name="SignInScreen" component={SignInScreen} options={({ }) => ({ title: '', animation: 'slide_from_right',})}/> 
              <Stack.Screen name="HomeScreen" component={HomeScreen} options={({ }) => ({ title: '', animation: 'slide_from_right',})}/> 
              <Stack.Screen name="QuestionScreen" component={QuestionScreen} options={({ }) => ({ title: '', animation: 'slide_from_right',})}/> 
              <Stack.Screen name="QuestionListScreen" component={QuestionListScreen} options={({ }) => ({ title: '답변하기', animation: 'slide_from_right',})}/> 
              <Stack.Screen name="WriteQuestionScreen" component={WriteQuestionScreen} options={({ }) => ({ title: '질문하기', animation: 'slide_from_right',})}/> 
              <Stack.Screen name="AnswerListScreen" component={AnswerListScreen} options={({ }) => ({ title: '오늘의 질문', animation: 'slide_from_right',})}/> 
              {/* TODO: title은 변수로 전달 받아서 변경해야 함! */}
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