import React from 'react'; 
import { View, Text, StyleSheet, Pressable} from 'react-native'; 
import { QuestionInfoContainer } from '../../components/QuestionInfoContainer';
import { AnswerCardContainer } from '../../components/AnswerCardContainer';
import { Container } from '../../components/Container';
interface Props {

}
const dummyQuestionData = [
    {
        content: '다시 돌아가도 그만큼은 못하겠다!\n가장 열정을 쏟은 순간은 언제인가요?',
        userName: '양나무',
        cardBgColor: '#3C61C1',
        cardHeight: '20%'
    }
]
const dummyAnswerData = [
    {
        content: '부족함을 뼈저리게 느꼈을 때, 소중한 기회를 놓치고 싶지 않을 때',
        likedNum: 100
    },
    {
        content: '이것 만큼은 잘해내고 싶다는 생각이 간절할 때',
        likedNum: 50
    },
    {
        content: '열정을 쏟고 있는 다른 사람을 보며 자극을 느낄 때',
        likedNum: 30
    }
]
export const AnswerListScreen = ({ navigation }: any) => {
  
  return (
    <Container>
        {dummyQuestionData.map((data, index) => (<QuestionInfoContainer key={index} content={data.content} userName={data.userName} cardBgColor={data.cardBgColor} cardHeight={data.cardHeight} />))}
        <View style={styles.twoCol}>
            {dummyAnswerData.map((data, index) => (<AnswerCardContainer key={index} content={data.content} likedNum={data.likedNum} cardBgColor={'#fff'} cardHeight={'100%'} />))}
        </View>
    </Container>
  )
}

const styles = StyleSheet.create({
    twoCol: {
        // TODO: 한 줄에 두 개씩 배치되는 형태가 아닌 한 줄에 한 개씩만 배치됨 (수정 필요!!)
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '50%',
        height: '20%'
     }
})