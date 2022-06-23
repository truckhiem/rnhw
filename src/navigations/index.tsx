import React from 'react';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper';
import merge from 'deepmerge';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '~/features/Home/HomeScreen.screen';
import {CountryScreen} from '~/features/Country/CountryScreen.screen';
import {ContinentScreen} from '~/features/Continent/ContinentScreen.screen';
import Screen from './screen';

const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);
const Stack = createStackNavigator();

type AppNavigationStackProps = {
  isDark: boolean;
};

const config = {
  screens: {
    [Screen.CountryScreen]: {
      path: 'country/:code',
      parse: {
        code: (code: string) => code,
      },
    },
    [Screen.ContinentScreen]: {
      path: 'continent/:code',
      parse: {
        code: (code: string) => code,
      },
    },
  },
};

const linking = {
  prefixes: ['rnhw://'],
  config,
};

export const AppNavigationStack = ({
  isDark,
}: AppNavigationStackProps): JSX.Element => {
  return (
    <NavigationContainer
      linking={linking}
      theme={isDark ? CombinedDarkTheme : CombinedDefaultTheme}>
      <Stack.Navigator
        initialRouteName={Screen.HomeScreen}
        screenOptions={{
          headerShown: true,
          headerLeftLabelVisible: false,
          title: '',
        }}>
        <Stack.Screen
          name={Screen.HomeScreen}
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name={Screen.CountryScreen} component={CountryScreen} />
        <Stack.Screen
          name={Screen.ContinentScreen}
          component={ContinentScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
