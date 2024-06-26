const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Login from "./screens/Login";
import Gender from "./screens/Gender";
import ChooseGoals from "./screens/ChooseGoals";
import SignUp from "./screens/SignUp";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import { useFonts } from 'expo-font';


// Your component code here




const App = () => {

  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [loaded] = useFonts({
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-SemiBold.ttf'),
  });
  
  if (!loaded) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Gender"
              component={Gender}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChooseGoals"
              component={ChooseGoals}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
