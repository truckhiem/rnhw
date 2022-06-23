import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import Screen from '~/navigations/screen';
import {RootStackParamList} from '~/navigations/types';

type Country = {
  name: string;
  code: string;
};

export type ContinentUIProps = {
  data: {
    code: string;
    name: string;
    countries: Array<Country>;
  };
  isLoading: boolean;
  onPressItem: (code: string) => unknown;
};

export type ContinentConnectedProps = {
  continentCode: string;
  onPressItem: (code: string) => unknown;
  onLoadedContinent: (continentName: string) => unknown;
};

export type ContinentScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, Screen.ContinentScreen>;
  route: RouteProp<RootStackParamList, Screen.ContinentScreen>;
};
