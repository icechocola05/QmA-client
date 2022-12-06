import React from 'react'; 
import { View, Text, StyleSheet, Pressable} from 'react-native'; 
interface Props {

}
export const QuestionScreen = ({ navigation }: any) => {
  
  return (
      <View style={styles.questionScreen}> 
          <Pressable onPress={() => navigation.navigate('AnswerListScreen')} style={styles.btn}>
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