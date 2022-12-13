import React from 'react';
// import type {Node} from 'react';
import {Text, View} from 'react-native';

const Question = props => {
  return (
    <>
      <View
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'row',
          padding: 30,
        }}>
        <Text style={{color: 'black'}}>
          Question:{props.numberQuestion}/{props.allQuestionNumber}
        </Text>
        <Text style={{color: 'black'}}>Time: {props.duration}</Text>
      </View>
      <View
        style={{justifyContent: 'center', alignItems: 'center', margin: 25}}>
        <Text style={{color: 'black', fontSize: 20}}>{props.Question} </Text>
      </View>
    </>
  );
};

export default Question;
