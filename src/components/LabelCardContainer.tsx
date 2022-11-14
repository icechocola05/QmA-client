import React from 'react'; 
import { View, Text, StyleSheet} from 'react-native'; 

interface Props {
  label: string,
  content: string,
  cardBgColor: string,
  cardHeight: string,
  cardWidth?: string,
}
export const LabelCardContainer = ({ label, content, cardBgColor, cardHeight, cardWidth = '100%' }: Props) => {
  
  return (
    <>
      <View style={{backgroundColor: (cardBgColor),height: (cardHeight), width: (cardWidth), padding: 10}}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.contentView}>
        <Text style={styles.contentText}>{content}</Text>
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
    justifyContent: 'center',
  },
  contentText: {
    textAlign: 'center'
  }
})