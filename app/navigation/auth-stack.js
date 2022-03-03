import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { screens } from '../config';
import OnBoarding from '../screens/onboarding';
import SignIn from '../screens/signin';
import WalkThrough from '../screens/walkthrough';
import BottomTabStack from './bottom-tab-stack';

const AuthStack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <AuthStack.Navigator headerMode="none">
      <AuthStack.Screen name={screens.onboarding} component={OnBoarding} />
      <AuthStack.Screen name={screens.signin} component={SignIn} />
      <AuthStack.Screen name={screens.home} component={BottomTabStack} />
      <AuthStack.Screen name={screens.walkthrough} component={WalkThrough} />
    </AuthStack.Navigator>
  );
}
