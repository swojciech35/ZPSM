import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SplashScreen from 'react-native-splash-screen';
import Devices from './components/Devices';
import Connection from './components/Connection';
import NewDevice from './components/NewDevice';
import { hide } from 'yargs';
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Devices" component={Devices} />
      <Tab.Screen name="Connection" component={Connection} />
      <Tab.Group screenOptions={{ presentation: 'modal' }}>
        <Tab.Screen name="newDevice" component={NewDevice} options={{tabBarItemStyle:{display:'none'}}} />
        </Tab.Group>
    </Tab.Navigator>
  );
}

export default function App() {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
