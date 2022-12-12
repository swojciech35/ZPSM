import * as React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';
import AnswerBox from './elements/AnswerBox';
import Question from './elements/Question';
function Test(props) {
  // const answer=props.answerss;

  // const mapAnswer=answer.map((anstab)=>
  // <TouchableOpacity style={{backgroundColor:"gray",display:'flex',minWidth:"90%",borderWidth:1,marginTop:10}}><Text style={{fontSize:30,color:"black",textAlign:'center'}}>{anstab.content}</Text></TouchableOpacity>
  // )
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
    }
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

      <AnswerBox answerss={currentQuestion.answers} />
      <View>
        <TouchableOpacity onPress={nextQuestion}>
          <Text>Next</Text>
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
