import {StackNavigationProp} from '@react-navigation/stack';
import Screen from '~/navigations/screen';
import {RootStackParamList} from '~/navigations/types';

export type Country = {
  name: string;
  code: string;
  capital: string;
};

export type HomeUIProps = {
  countries: Array<Country>;
  isLoading: boolean;
  onPressItem: (code: string) => unknown;
};

export type CountryItemProps = {
  item: Country;
  onPressItem: (code: string) => unknown;
};

export type HomeConnectedProps = {
  onPressItem: (code: string) => unknown;
};

export type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, Screen.HomeScreen>;
};
