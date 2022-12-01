import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Pressable, ScrollView} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {PostItem} from '../../components/PostItem';
interface Props {}

const sampleResponseData = {
  questions: [
    {
      questionId: 1,
      content:
        '다시 돌아가도 그만큼은 못하겠다!\n가장 열정을 쏟은 순간은 언제인가요?',
      numAnswer: 14,
    },
    {
      questionId: 2,
      content:
        '다시 돌아가도 그만큼은 못하겠다!\n가장 열정을 쏟은 순간은 언제인가요?',
      numAnswer: 144,
    },
    {
      questionId: 3,
      content:
        '다시 돌아가도 그만큼은 못하겠다!\n가장 열정을 쏟은 순간은 언제인가요?',
      numAnswer: 4,
    },
  ],
};

export const QuestionListScreen = () => {
  const [questionList, setQuestionList] = useState<QuestionDto[]>([]);

  useEffect(function getResponse() {
    (async function getQuestionListData() {
      // const data = await getQuestionList();
      setQuestionList(sampleResponseData?.questions);
    })();
  }, []);

  return (
    <FlatList
      style={{flex: 1, backgroundColor: '#FFFFFF'}}
      data={questionList}
      renderItem={question => (
        <PostItem
          key={question.item.questionId}
          content={question.item.content}
          numberOfAnswers={question.item.numAnswer}
          moveToScreen={() =>
            console.log(question.item.questionId, '의 상세 화면으로 이동')
          }
        />
      )}
      ItemSeparatorComponent={() => (
        <View style={{height: 1, backgroundColor: '#F6F6F6'}}></View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
