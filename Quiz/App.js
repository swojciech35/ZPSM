import * as React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from 'react-native-splash-screen';
import Home from './components/Home';
import Result from './components/Result';
import Test from './components/Test';
import Rules from './components/Rules';

const Drawer = createDrawerNavigator();

export default function App() {
  const [isLoading, setLoading] = React.useState(true);
  const [tests, setTests] = React.useState([]);

  const getTests = async () => {
    try {
      const response = await fetch('https://tgryl.pl/quiz/tests');
      const json = await response.json();
      setTests(json);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  function MyDrawer() {
    return (
      <Drawer.Navigator useLegacyImplementation>
        {rulesFirst == '0' ? (
          <Drawer.Screen name="Rules" component={Rules} />
        ) : null}
        <Drawer.Screen name="Home" component={Home} />
        {/* <Drawer.Screen name="Test" component={TestProps} /> */}
        {tests.map((item, index) => {
          const TestPropss = () => <Test id={item.id} />;

          return (
            <Drawer.Screen
              key={index}
              name={item.name}
              component={TestPropss}
            />
          );
        })}
        <Drawer.Screen name="Result" component={Result} />
      </Drawer.Navigator>
    );
  }

  const getData = async () => {
    try {
      await AsyncStorage.getItem('@RulesKey').then(value => {
        if (value != null) {
          setrulesFirst('1');
          console.log('zmiana na 1');
          // SplashScreen.hide();
        }
      });
    } catch (e) {
      console.log(e);
    }
  };

  React.useEffect(() => {
    getTests();
    SplashScreen.hide();

    console.log('hehe działam');
    getData();
  }, []);

  const [rulesFirst, setrulesFirst] = React.useState('0');
  return (
    <>
      <NavigationContainer>
        {isLoading ? <ActivityIndicator /> : <MyDrawer />}
      </NavigationContainer>
    </>
  );
}
