import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import 'react-native-gesture-handler';
import Page from './components/pages/Page';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View >
        <Text style={{ textAlign: "center", fontSize: 20 }} >reddit.com/r/pics/</Text>
      </View>
      <Tab.Navigator>
        {/*each tab pass the section  prop to the page */}
        <Tab.Screen name="hot" children={() => <Page section="hot" />} />
        <Tab.Screen name="new" children={() => <Page section="new" />} />
        <Tab.Screen name="top" children={() => <Page section="top" />} />
        <Tab.Screen name="controversial" children={() => <Page section="controversial" />} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
