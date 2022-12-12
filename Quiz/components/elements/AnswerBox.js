import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {StyleSheet} from 'react-native';

const AnswerBox = props => {
  const answer = props.answerss;

  const correctAnswer = props.click;
  const mapAnswer = answer.map((anstab, index) => (
    <TouchableOpacity
      key={index}
      style={{
        backgroundColor: 'gray',
        display: 'flex',
        minWidth: '90%',
        borderWidth: 1,
        marginTop: 10,
      }}
      onPress={() => {
        {
          correctAnswer(anstab.isCorrect);
        }
      }}>
      <Text style={{fontSize: 30, color: 'black', textAlign: 'center'}}>
        {anstab.content}
      </Text>
    </TouchableOpacity>
  ));
  return <View style={styles.answerBox}>{mapAnswer}</View>;
};

const styles = StyleSheet.create({
  answerBox: {
    borderWidth: 1,
    padding: 10,
    margin: 10,
  },
});

export default AnswerBox;
