import React from 'react';
import {View, Text, TextInput} from 'react-native';

function NewDevice() {
  const [name, onChangeName] = React.useState(null);
  const [place, onChangePlace] = React.useState(null);
  const [command, onChangeCommand] = React.useState(null);
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
    </View>
  );
}

export default NewDevice;
