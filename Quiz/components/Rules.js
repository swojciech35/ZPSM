import * as React from 'react';
import {View, Text, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Home from './Home';

function Rules({navigation}) {
  const setData = async () => {
    try {
      await AsyncStorage.setItem('@RulesKey', '1');
      console.log('zmiana na 1');
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <View
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'column',
          padding: 20,
        }}>
        <Text style={{color: 'black', fontSize: 40, textAlign: 'center'}}>
          ZASADY
        </Text>
        <Text style={{color: 'black', fontSize: 30}}>
          Polecana strategia "SiW"
        </Text>
        <View
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column',
            padding: 10,
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 30,
              marginTop: 20,
              textAlign: 'center',
            }}>
            S-Strzelaj
          </Text>
          <Text style={{color: 'black', fontSize: 30, textAlign: 'center'}}>
            i
          </Text>
          <Text style={{color: 'black', fontSize: 30, textAlign: 'center'}}>
            W-Wygrywaj
          </Text>
          <View
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'column',
              padding: 20,
            }}>
            <Text style={{color: 'black', fontSize: 30, textAlign: 'center'}}>
              A jak jesteś mądry i wiesz to nie strzelaj i wygrywaj :)
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={{
            borderWidth: 5,
            borderColor: 'yellow',
            margin: 15,
            marginTop: 30,
            backgroundColor: '#2f2f2f',
          }}
          onPress={() => {
            setData();
            navigation.navigate('Home');
          }}>
          <Text style={{fontSize: 35, textAlign: 'center', color: '#ffffff'}}>
            AKCEPTUJE
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

export default Rules;
