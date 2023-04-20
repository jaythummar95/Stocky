import React from 'react';
import {observer} from 'mobx-react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import {SplaceScreen} from '../screen/SplaceScreen';
import {DashboardScreen} from '../screen/DashboardScreen';

export type StackParamList = {
  SplashScreen: undefined;
  DashboardScreen: undefined;
};

const navigationRef = createNavigationContainerRef<StackParamList>();

export function goBack() {
  if (navigationRef.isReady()) {
    if (navigationRef.canGoBack()) {
      navigationRef.goBack();
    }
  }
}

const Stack = createStackNavigator<StackParamList>();

export enum Route {
  Splash = 'SplashScreen',
  Dashboard = 'DashboardScreen',
}
export const AppNavigation: React.FC = observer(() => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={Route.Splash}>
        <Stack.Screen name={Route.Splash} component={SplaceScreen} />
        <Stack.Screen name={Route.Dashboard} component={DashboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
});
