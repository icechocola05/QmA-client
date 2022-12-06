import React from 'react'; 
import { View, Text, StyleSheet, Pressable} from 'react-native'; 

interface Props {
  content: string,
  userName: string,
  cardBgColor: string,
  cardHeight: string,
  cardWidth?: string
}
export const QuestionInfoContainer = ({ content, userName, cardBgColor, cardHeight, cardWidth = '100%' }: Props) => {
  
  return (
    <>
        <View style={{backgroundColor: (cardBgColor),height: (cardHeight), width: (cardWidth), padding: 10}}>
            <View style= {styles.contentView}>
                <Text style={styles.contentText}>{content}</Text>
                <Text style={styles.userNameText}>{userName}</Text>
            </View>
        </View>
    </>
  )
}

const styles = StyleSheet.create({
  label: {
    fontWeight: 'bold'
  },
  contentView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  contentText: {
    textAlign: 'center',
    paddingBottom: 10
  },
  userNameText: {
    textAlign: 'center',
    marginTop: 20
  }
})