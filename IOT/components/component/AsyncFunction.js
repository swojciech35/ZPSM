import AsyncStorage from '@react-native-async-storage/async-storage';

async function getData(key) {
  try {
    const jsonValue = await AsyncStorage.getItem(String(key));
    console.log(JSON.parse(jsonValue));
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    // error reading value
  }
}
async function storeData(key, value) {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(String(key), jsonValue);
    console.log('save new device');
  } catch (e) {
    // saving error
  }
}

export {getData, storeData};
