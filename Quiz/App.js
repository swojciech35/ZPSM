import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Home from './components/Home';
import Result from './components/Result';
import Test from './components/Test';
import Rules from './components/Rules';

const Drawer = createDrawerNavigator();

export default function App() {
  let answers = [
    {
      "question": "Który wódz po śmierci Gajusza Mariusza, prowadził wojnę domową z Sullą ?",
      "answers": [
      {
      "content": "LUCJUSZ CYNNA",
      "isCorrect": true
      },
      {
      "content": "JULIUSZ CEZAR",
      "isCorrect": false
      },
      {
      "content": "LUCJUSZ MURENA",
      "isCorrect": false
      },
      {
      "content": "MAREK KRASSUS",
      "isCorrect": false
      }
      ],
      "duration": 30
      },
      {
        "question": "2Który wódz po śmierci Gajusza Mariusza, prowadził wojnę domową z Sullą ?",
        "answers": [
        {
        "content": "2LUCJUSZ CYNNA",
        "isCorrect": true
        },
        {
        "content": "2JULIUSZ CEZAR",
        "isCorrect": false
        },
        {
        "content": "2LUCJUSZ MURENA",
        "isCorrect": false
        },
        {
        "content": "2MAREK KRASSUS",
        "isCorrect": false
        }
        ],
        "duration": 30
        },{
          "question": "Który wódz po śmierci Gajusza Mariusza, prowadził wojnę domową z Sullą ?",
          "answers": [
          {
          "content": "LUCJUSZ CYNNA",
          "isCorrect": true
          },
          {
          "content": "JULIUSZ CEZAR",
          "isCorrect": false
          },
          {
          "content": "LUCJUSZ MURENA",
          "isCorrect": false
          },
          {
          "content": "MAREK KRASSUS",
          "isCorrect": false
          }
          ],
          "duration": 30
          },
          {
            "question": "2Który wódz po śmierci Gajusza Mariusza, prowadził wojnę domową z Sullą ?",
            "answers": [
            {
            "content": "2LUCJUSZ CYNNA",
            "isCorrect": true
            },
            {
            "content": "2JULIUSZ CEZAR",
            "isCorrect": false
            },
            {
            "content": "2LUCJUSZ MURENA",
            "isCorrect": false
            },
            {
            "content": "2MAREK KRASSUS",
            "isCorrect": false
            }
            ],
            "duration": 30
            },
  ];
  const TestProps = () => (
    <Test
      Question={'W którym roku powinienieś zrezygnować ze studiów?'}
      answerss={answers}
    />
  );
  function MyDrawer() {
    return (
      <Drawer.Navigator useLegacyImplementation>
        {rulesFirst == '0' ? (
          <Drawer.Screen name="Rules" component={Rules} />
        ) : null}
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Test" component={TestProps} />
        <Drawer.Screen name="Result" component={Result} />
      </Drawer.Navigator>
    );
  }

  const getData = async () => {
    try {
      AsyncStorage.getItem('@RulesKey').then(value => {
        if (value != null) {
          setrulesFirst('1');
          console.log('zmiana na 1');
        }
      });
    } catch (e) {
      console.log(e);
    }
  };

  React.useEffect(() => {
    console.log('hehe działam');
    getData();
  }, []);

  const [rulesFirst, setrulesFirst] = React.useState('0');
  return (
    <>
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
    </>
  );
}
