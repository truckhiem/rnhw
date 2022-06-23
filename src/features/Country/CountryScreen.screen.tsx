import React from 'react';
import Screen from '~/navigations/screen';
import {CountryConnected} from './CountryScreen.connected';
import {CountryScreenProps} from './types';

export const CountryScreen = ({
  navigation,
  route,
}: CountryScreenProps): JSX.Element => {
  const {code} = route.params;
  const onLoadedCountry = (countryName: string) => {
    navigation.setOptions({title: countryName});
  };
  return (
    <CountryConnected
      countryCode={code}
      onLoadedCountry={onLoadedCountry}
      onPressContinent={(continentCode: string) => {
        navigation.navigate(Screen.ContinentScreen, {
          code: continentCode,
        });
      }}
    />
  );
};
