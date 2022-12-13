import * as React from 'react';
import {View, Text, Alert} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';
import AnswerBox from './elements/AnswerBox';
import Question from './elements/Question';
function Test(props) {
  const questions = props.answerss;
  const [currentIndex, setIndex] = React.useState(0);
  const [currentQuestion, setQuestion] = React.useState(
    questions[currentIndex],
  );
  const [currentPoints, setPoints] = React.useState(0);

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setIndex(currentIndex + 1);
      setQuestion(questions[currentIndex + 1]);
    }else{
        Alert.alert("Points: "+currentPoints+"/"+questions.length)
    }
  };

  const checkAnswer = answer => {
    if (answer === true) {
      setPoints(currentPoints + 1);
    }
    nextQuestion();
  };

  return (
    <>
      <View>{console.log(currentQuestion.answers)}</View>
      <Question
        Question={currentQuestion.question}
        numberQuestion={currentIndex + 1}
        allQuestionNumber={questions.length}
        duration={currentQuestion.duration}
      />

      <AnswerBox answerss={currentQuestion.answers} click={checkAnswer} />
      <View>
        <TouchableOpacity onPress={() => console.log(currentPoints)}>
          <Text>Points</Text>
        </TouchableOpacity>
      </View>
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
