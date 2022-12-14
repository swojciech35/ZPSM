import * as React from 'react';
import {View, Text, Alert, ActivityIndicator, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';
import AnswerBox from './elements/AnswerBox';
import Question from './elements/Question';
import {openDatabase} from 'react-native-sqlite-storage';
import NetInfo from '@react-native-community/netinfo';
function Test({route, navigation}) {
  const {id} = route.params;
  const db = openDatabase({name: 'Quiz.db', createFromLocation: 1});
  let _ = require('lodash');
  const [isLoading, setLoading] = React.useState(true);
  const [test, setTest] = React.useState([]);
  const [start, setStart] = React.useState(false);
  const [testDB, setTestDB] = React.useState([]);

  const getTestFromDatabase = () => {
    console.log('baza danych');
    db.transaction(tx => {
      tx.executeSql(
        'SELECT quiz_data FROM quiz where id=?',
        [id],
        (tx, results) => {
          setTestDB(JSON.parse(results.rows.item(0).quiz_data));
          //to load from database 2 lines  V
          setTest(JSON.parse(results.rows.item(0).quiz_data));
          setQuest(_.shuffle(JSON.parse(results.rows.item(0).quiz_data).tasks));
          setLoading(false);
          // setQuestion(questions[currentIndex]);       //chyba zbędne
        },
      );
    });
  };
  const saveDatainDB = data => {
    console.log(typeof data);
    db.transaction(function (tx) {
      tx.executeSql(
        'INSERT INTO quiz (id, quiz_data) VALUES (?,?)',
        [id, data],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            console.log('Save!');
          } else console.log('Save Failed');
        },
      );
    });
  };

  const getTest = async () => {
    console.log('internet dane');
    let link = 'https://tgryl.pl/quiz/test/';
    link += id;
    try {
      const response = await fetch(link);
      const json = await response.json();
      saveDatainDB(JSON.stringify(json));
      // setTest(json);
      // await setQuest(_.shuffle(json.tasks));
    } catch (e) {
      console.log(e);
    } finally {
      getTestFromDatabase();
      // setQuestion(questions[currentIndex]);
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
  const [netinfo, setNetInfo] = React.useState('');
  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setIndex(currentIndex + 1);
      setQuestion(questions[currentIndex + 1]);
    } else {
      sendResult();
      if (netinfo === true) {
        navigation.navigate('Result');
      } else if (netinfo === false) {
        navigation.navigate('Home');
      }
      Alert.alert('Points: ' + currentPoints + '/' + questions.length);
    }
  };

  const checkAnswer = answer => {
    if (answer === true) {
      setPoints(currentPoints + 1);
    }
    nextQuestion();
  };

  const handleGetInfoNet = () => {
    NetInfo.fetch().then(state => {
      setNetInfo(state.isConnected);
    });
  };

  React.useEffect(() => {
    handleGetInfoNet();
    if (netinfo === true) {
      getTest();
    }
    if (netinfo === false) {
      getTestFromDatabase();
    }

    console.log(id);
  }, [netinfo]);

  const sendResult = async () => {
    if (netinfo === true) {
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
    } else {
      alert(`Brak Internetu`);
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

                  // console.log(questions);
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
                answerss={_.shuffle(currentQuestion.answers)}
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
