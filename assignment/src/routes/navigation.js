
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import registration from "../screens/registration/registration";
import signIn from "../screens/signIn/signIn";


const RegistStack = createNativeStackNavigator();
export const RegisStackNavigation = (props) => {
  return (
    <RegistStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName='signIn'>
      <RegistStack.Screen name='signIn' component={signIn} />
      <RegistStack.Screen name='registration' component={registration} />
    </RegistStack.Navigator>
  );
};

const CombineStack = createNativeStackNavigator();
export const CombineStackNavigation = (props) => {
  return (
    <CombineStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName='Regist'>
      <CombineStack.Screen name='Regist' component={RegisStackNavigation} />
    </CombineStack.Navigator>
  );
};
