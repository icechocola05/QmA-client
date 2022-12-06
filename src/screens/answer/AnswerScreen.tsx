import React from 'react'; 
import { View, Text, StyleSheet, Pressable, TextInput} from 'react-native'; 

export const QuestionScreen = ({ navigation }: any) => {
  
  return (
    <View style={styles.questionScreen}> 
        <TextInput></TextInput>
        <Pressable onPress={() => navigation.navigate('HomeScreen')} style={styles.btn}>
        <Text style={styles.btnText}>Answer</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    questionScreen: { 
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
})