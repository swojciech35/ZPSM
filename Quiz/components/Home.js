import * as React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {TouchableOpacity, FlatList} from 'react-native-gesture-handler';

import HomeElement from './elements/HomeElement';

function Home({navigation}) {
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

  React.useEffect(() => {
    getTests();
  }, []);

  const renderItem = ({item}) => (
    <HomeElement
      backgroundColor={'#ffffff'}
      title={item.name}
      text={item.description}
      lvl={item.level}
      colorText={'#000000'}
      onPress={()=>navigation.navigate(item.name)}
    />
  );

  return (
    <>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View style={{flex: 1, margin: 30}}>
          <FlatList data={tests} renderItem={renderItem} />
        </View>
      )}
      <View>
        <TouchableOpacity
          style={{
            borderWidth: 5,
            borderColor: 'yellow',
            margin: 15,
            marginTop: 30,
            backgroundColor: '#2f2f2f',
          }}
          onPress={() => navigation.navigate('Result')}>
          <Text style={{fontSize: 35, textAlign: 'center', color: '#ffffff'}}>
            Wyniki
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

export default Home;
