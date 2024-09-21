/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import Login from './screens/Login';
import SignIn from './screens/SignIn';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { enableScreens } from 'react-native-screens';
enableScreens();

type SectionProps = PropsWithChildren<{
  title: string;
}>;

// function Section({children, title}: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View>
//       <Text>Login</Text>
//     </View>
//   );
// }

function App(): JSX.Element {
  const Stack = createNativeStackNavigator();
  const isDarkMode = useColorScheme() === 'dark';
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown : false}}
           
        />
        <Stack.Screen name="SignIn"
        options={{headerShown : false}}
        component={SignIn}/>

      </Stack.Navigator>
    </NavigationContainer>   

  );
};


export default App;
