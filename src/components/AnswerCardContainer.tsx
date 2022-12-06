import React from 'react'; 
import { View, Text, StyleSheet, Pressable} from 'react-native'; 

interface Props {
  content: string,
  likedNum: number,
  cardBgColor: string,
  cardHeight: string,
  cardWidth?: string
}
export const AnswerCardContainer = ({ content, likedNum, cardBgColor, cardHeight, cardWidth = '100%' }: Props) => {
  
  return (
    <>
        <View style={{backgroundColor: (cardBgColor),height: (cardHeight), width: (cardWidth), paddingLeft: 5, paddingRight: 5, paddingTop: 10, paddingBottom: 10}}>
        <View style= {styles.contentView}>
            <Text style={styles.contentText}>{content}</Text>
            <Pressable>
                <View style={styles.likedNumView}>
                    <Text style={styles.likedNumText}>❤️ {likedNum}</Text>
                </View>
            </Pressable>
        </View>
        </View>
    </>
  )
}

const styles = StyleSheet.create({
    
  contentView: {
    flex: 1,
    // alignItems: 'stretch',
    justifyContent: 'center',
    borderColor: '#D9D9D9',
    borderWidth: 0.5,
    borderRadius: 15,
    padding: 10
  },
  contentText: {
    textAlign: 'center'
  },
  likedNumView: {
    justifyContent: 'space-around'
  },
  likedNumText: {
    paddingTop: 20,
    textAlign: 'left'
  }
})