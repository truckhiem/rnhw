import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import Screen from '~/navigations/screen';
import {RootStackParamList} from '~/navigations/types';

export type CountryUIProps = {
  data: {
    code: string;
    phone: string;
    continent: {
      code: string;
      name: string;
    };
  };
  isLoading: boolean;
  onPressContinent: (continentCode: string, continentName: string) => unknown;
};

export type CountryConnectedProps = {
  countryCode: string;
  onPressContinent: (continentCode: string, continentName: string) => unknown;
  onLoadedCountry: (countryName: string) => unknown;
};

export type CountryScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, Screen.CountryScreen>;
  route: RouteProp<RootStackParamList, Screen.CountryScreen>;
};

export type RowItemProps = {
  title: string;
  value: string;
  onPress?: () => unknown;
};
