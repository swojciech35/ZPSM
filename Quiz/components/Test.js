import * as React from 'react';
import {View, Text, Alert, ActivityIndicator, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';
import AnswerBox from './elements/AnswerBox';
import Question from './elements/Question';
function Test({route, navigation}) {
  const {id} = route.params;
  const [isLoading, setLoading] = React.useState(true);
  const [test, setTest] = React.useState([]);
  const [start, setStart] = React.useState(false);

  const getTest = async () => {
    let link = 'https://tgryl.pl/quiz/test/';
    link += id;
    try {
      const response = await fetch(link);
      const json = await response.json();
      setTest(json);
      await setQuest(json.tasks);
    } catch (e) {
      console.log(e);
    } finally {
      setQuestion(questions[currentIndex]);
      setLoading(false);
    }
  };
  const [text, onChangeText] = React.useState(null);
  const [questions, setQuest] = React.useState([{question: null, answers: []}]);

  const [currentIndex, setIndex] = React.useState(0);
  const [currentQuestion, setQuestion] = React.useState(
    questions[currentIndex],
  );
  const [currentPoints, setPoints] = React.useState(0);

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setIndex(currentIndex + 1);
      setQuestion(questions[currentIndex + 1]);
    } else {
      sendResult();
      navigation.navigate('Result');
      Alert.alert('Points: ' + currentPoints + '/' + questions.length);
    }
  };

  const checkAnswer = answer => {
    if (answer === true) {
      setPoints(currentPoints + 1);
    }
    nextQuestion();
  };

  React.useEffect(() => {
    getTest();
    console.log(id);
  }, []);

  const sendResult = async () => {
    try {
      await fetch('http://tgryl.pl/quiz/result', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nick: text,
          score: currentPoints,
          total: test.tasks.length,
          type: test.name,
        }),
      });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <>
          {!start ? (
            <View style={{flexDirection: 'column'}}>
              <TextInput
                style={{borderWidth: 1, height: 40, margin: 12, padding: 10}}
                onChangeText={onChangeText}
                value={text}
                placeholder="Nick"></TextInput>
              <TouchableOpacity
                style={{
                  borderWidth: 5,
                  borderColor: 'yellow',
                  margin: 15,
                  marginTop: 30,
                  backgroundColor: '#2f2f2f',
                }}
                onPress={() => {
                  setQuestion(questions[currentIndex]);
                  setStart(true);
                }}>
                <Text
                  style={{fontSize: 35, textAlign: 'center', color: '#ffffff'}}>
                  start
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <>
              <View>{console.log(questions)}</View>
              <Question
                Question={currentQuestion.question}
                numberQuestion={currentIndex + 1}
                allQuestionNumber={questions.length}
                duration={currentQuestion.duration}
              />
              <AnswerBox
                answerss={currentQuestion.answers}
                click={checkAnswer}
              />
              <View>
                <TouchableOpacity onPress={() => console.log(test)}>
                  <Text>Points</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'gray',
    margin: '8%',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 25,
    paddingRight: 25,
  },
});

export default Test;
