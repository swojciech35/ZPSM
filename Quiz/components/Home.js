import * as React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity, FlatList} from 'react-native-gesture-handler';

import HomeElement from './elements/HomeElement';

function Home({route, navigation}) {
  const {testList} = route.params;
  const [tests, setTests] = React.useState([]);
  React.useEffect(() => {
    setTests(testList);
  }, []);
  const renderItem = ({item}) => (
    <HomeElement
      backgroundColor={'#ffffff'}
      title={item.name}
      text={item.description}
      lvl={item.level}
      colorText={'#000000'}
      onPress={() => navigation.navigate(item.name)}
    />
  );

  return (
    <>
      <View style={{flex: 1, margin: 30}}>
        <FlatList data={tests} renderItem={renderItem} />
      </View>

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
