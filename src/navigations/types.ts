import Screen from './screen';

export type RootStackParamList = {
  [Screen.HomeScreen]: undefined;
  [Screen.CountryScreen]: {code: string};
  [Screen.ContinentScreen]: {code: string};
};
