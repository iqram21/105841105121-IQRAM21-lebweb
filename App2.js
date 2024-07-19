// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignupPage from './SignupPage';
import LoginPage from './LoginPage';
import ForgetPasswordPage from './ForgetPasswordPage';


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Login" onPress={() => navigation.navigate('Login')}/>
      <Button
        title="Go to Forget Password" onPress={() => navigation.navigate('ForgetPassword')}/>
      <Button
        title="Go to Signup" onPress={() => navigation.navigate('Signup')}/>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Signup" component={SignupPage} />
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="ForgetPassword" component={ForgetPasswordPage} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;