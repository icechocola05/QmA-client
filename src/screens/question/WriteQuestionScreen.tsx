import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  Keyboard,
  KeyboardEvent,
  KeyboardAvoidingView,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Container} from '../../components/Container';
import {LineRoundButton} from '../../components/LineRoundButton';
interface Props {}
export const WriteQuestionScreen = () => {
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const onKeyboardDidshow = (e: KeyboardEvent) => {
    setKeyboardHeight(e.endCoordinates.height);
  };
  useEffect(() => {
    const showSubscription = Keyboard.addListener(
      'keyboardDidShow',
      onKeyboardDidshow,
    );
    return () => {
      showSubscription.remove();
    };
  }, []);
  const onInputFocus = () => {
    setIsFocused(true);
  };
  const onInputFocusOut = () => {
    setIsFocused(false);
    Keyboard.dismiss();
  };
  return (
    <>
      <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
        <Container>
          <View style={styles.textCardView}>
            <TextInput
              placeholder="질문을 입력해주세요."
              style={styles.textCardText}
              autoFocus={true}
              onFocus={(e: any) => {
                onInputFocus();
              }}
              onBlur={(e: any) => {
                onInputFocusOut();
              }}
            ></TextInput>
          </View>
        </Container>
      </ScrollView>
      <View
        style={[
          styles.buttonContainer,
          {paddingBottom: isFocused ? keyboardHeight + 10 : 30},
        ]}
      >
        <LineRoundButton
          buttonText={'전체 공개'}
          onPress={() => console.log('전체 공개 버튼 클릭')}
        />
        <LineRoundButton
          buttonText={'그룹 공개'}
          onPress={() => console.log('그룹 공개 버튼 클릭')}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  textCardView: {
    justifyContent: 'center',
    width: '100%',
    height: 200,
    backgroundColor: '#D9D9D9',
  },
  textCardText: {
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
