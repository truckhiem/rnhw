import React from 'react';
import Screen from '~/navigations/screen';
import {ContinentConnected} from './ContinentScreen.connected';
import {ContinentScreenProps} from './types';

export const ContinentScreen = ({
  navigation,
  route,
}: ContinentScreenProps): JSX.Element => {
  const {code} = route.params;
  const onLoadedContinent = (continentName: string) => {
    navigation.setOptions({title: continentName});
  };
  return (
    <ContinentConnected
      continentCode={code}
      onLoadedContinent={onLoadedContinent}
      onPressItem={countryCode =>
        navigation.navigate(Screen.CountryScreen, {code: countryCode})
      }
    />
  );
};
