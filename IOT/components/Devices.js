import React from 'react';
import {View, Text, Button} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {getData} from './component/AsyncFunction';

function Devices({navigation}) {
  const [devices, setDevices] = React.useState(null);

  React.useEffect(() => {
    console.log('sdhshgdhagshd');
    getData('@Devices').then(value => {
      setDevices(value);
    });
  }, []);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity onPress={() => navigation.navigate('newDevice')}>
        <View
          style={{
            borderWidth: 2,
            padding: 30,
            aspectRatio: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 100, color: '#000000'}}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default Devices;
