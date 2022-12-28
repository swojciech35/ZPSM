import * as React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerItem,
  DrawerItemList,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from 'react-native-splash-screen';
import Home from './components/Home';
import Result from './components/Result';
import Test from './components/Test';
import Rules from './components/Rules';
import {openDatabase} from 'react-native-sqlite-storage';
const Drawer = createDrawerNavigator();

export default function App() {
  const db = openDatabase({name: 'Quiz.db', createFromLocation: 1});
  let _ = require('lodash');
  const [isLoading, setLoading] = React.useState(true);
  const [tests, setTests] = React.useState([]);

  //get tests from internet
  const getTests = async () => {
    try {
      const response = await fetch('https://tgryl.pl/quiz/tests');
      const json = await response.json();
      saveDatainDB(json);
      setTests(_.shuffle(json));
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const saveDatainDB = data => {
    for (let i = 0; i < data.length; i++) {
      console.log(data[i]);
      db.transaction(function (tx) {
        tx.executeSql(
          'INSERT INTO tests (id, name, description,level) VALUES (?,?,?,?)',
          [data[i].id, data[i].name, data[i].description, data[i].level],
          (tx, results) => {
            console.log('Results', results.rowsAffected);
            if (results.rowsAffected > 0) {
              console.log('Save!');
            } else console.log('Save Failed');
          },
        );
      });
    }
  };

  function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Random"
          onPress={() => props.navigation.navigate(_.sample(tests).name)}
        />
      </DrawerContentScrollView>
    );
  }

  function MyDrawer() {
    return (
      <Drawer.Navigator
        useLegacyImplementation
        drawerContent={props => <CustomDrawerContent {...props} />}>
        {rulesFirst == '0' ? (
          <Drawer.Screen name="Rules" component={Rules} />
        ) : null}
        <Drawer.Screen
          name="Home"
          component={Home}
          initialParams={{testList: tests}}
        />
        {tests.map((item, index) => {
          return (
            <Drawer.Screen
              key={index}
              name={item.name}
              component={Test}
              initialParams={{id: item.id}}
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

  //get tests from sqlite
  const getTestFromDatabase = () => {
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM tests', [], (tx, results) => {
        var temp = [];
        for (let i = 0; i < results.rows.length; ++i)
          temp.push(results.rows.item(i));
        setTests(temp);
      });
    });
  };

  React.useEffect(() => {
    getTests();
    SplashScreen.hide();
    getTestFromDatabase();
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
