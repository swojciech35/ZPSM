import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Slider from '@react-native-community/slider';
import {getData, storeData} from './component/AsyncFunction';

function NewDevice({navigation}) {
  const [devices, setDevices] = React.useState([]);
  const [name, onChangeName] = React.useState(null);
  const [place, onChangePlace] = React.useState(null);
  const [command, onChangeCommand] = React.useState(null);
  const [sliderValueRed, setSliderValueRed] = React.useState(
    Math.floor(Math.random() * 255) + 0,
  );
  const [sliderValueGreen, setSliderValueGreen] = React.useState(
    Math.floor(Math.random() * 255) + 0,
  );
  const [sliderValueBlue, setSliderValueBlue] = React.useState(
    Math.floor(Math.random() * 255) + 0,
  );
  const saveDevice = () => {
    let temp = devices;
    console.log('test');
    temp.push({
      name: name,
      place: place,
      command: command,
      color: `rgb(${sliderValueRed},${sliderValueGreen},${sliderValueBlue})`,
    });
    console.log(temp);
    storeData('@Devices', temp);
    navigation.goBack();
  };
  React.useEffect(() => {
    getData('@Devices').then(value => {
      setDevices(value);
    });
  }, []);
  return (
    <View style={{flex: 1, padding: 30}}>
      <TextInput
        style={{borderWidth: 1, height: 40, margin: 12, padding: 10}}
        onChangeText={onChangeName}
        value={name}
        placeholder="Name"
      />
      <TextInput
        style={{borderWidth: 1, height: 40, margin: 12, padding: 10}}
        onChangeText={onChangePlace}
        value={place}
        placeholder="Place"
      />
      <TextInput
        style={{borderWidth: 1, height: 40, margin: 12, padding: 10}}
        onChangeText={onChangeCommand}
        value={command}
        placeholder="Command"
      />
      <View style={{flexDirection: 'row', marginTop: 30}}>
        <Text style={{fontSize: 25, color: '#000000', margin: 10}}>Color:</Text>
        <View
          style={{
            borderWidth: 1,
            width: '70%',
            height: '100%',
            backgroundColor: `rgb(${sliderValueRed},${sliderValueGreen},${sliderValueBlue})`,
          }}></View>
      </View>
      <Slider
        style={{width: '98%', height: 55, marginTop: 10}}
        minimumValue={0}
        maximumValue={255}
        value={sliderValueRed}
        onValueChange={sliderValueRed => setSliderValueRed(sliderValueRed)}
        minimumTrackTintColor="#FF0000"
        maximumTrackTintColor="#FF0000"
      />
      <Slider
        style={{width: '98%', height: 55}}
        minimumValue={0}
        maximumValue={255}
        value={sliderValueGreen}
        onValueChange={sliderValueGreen =>
          setSliderValueGreen(sliderValueGreen)
        }
        minimumTrackTintColor="#00FF00"
        maximumTrackTintColor="#00FF00"
      />
      <Slider
        style={{width: '98%', height: 55}}
        minimumValue={0}
        maximumValue={255}
        value={sliderValueBlue}
        onValueChange={sliderValueBlue => setSliderValueBlue(sliderValueBlue)}
        minimumTrackTintColor="#0000FF"
        maximumTrackTintColor="#0000FF"
      />
      <View style={{flexDirection: 'row', display: 'flex'}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#B5B5B5',
            flex: 1,
            margin: 10,
            padding: 5,
            alignItems: 'center',
          }}
          onPress={() => navigation.goBack()}>
          <Text style={{color: '#000000', fontSize: 20}}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#B5B5B5',
            flex: 1,
            margin: 10,
            padding: 5,
            alignItems: 'center',
          }}
          onPress={() => {
            saveDevice();
          }}>
          <Text style={{color: '#000000', fontSize: 20}}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default NewDevice;
