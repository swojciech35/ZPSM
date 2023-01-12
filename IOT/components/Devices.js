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
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
        }}>
        {devices != null
          ? devices.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  backgroundColor: item.color,
                  borderWidth: 2,
                  margin: 10,
                  width: 150,
                  height: 150,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{fontSize: 40, textAlign: 'center'}}>
                  {item.name}
                </Text>
                <Text style={{fontSize: 20, textAlign: 'center'}}>
                  {item.place}
                </Text>
              </TouchableOpacity>
            ))
          : null}
        <TouchableOpacity onPress={() => navigation.navigate('newDevice')}>
          <View
            style={{
              borderWidth: 2,
              margin: 10,
              width: 150,
              height: 150,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 100, color: '#000000'}}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Devices;
