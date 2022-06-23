import React from 'react';
import Screen from '~/navigations/screen';
import {HomeConnected} from './HomeScreen.connected';
import {HomeScreenProps} from './types';

export const HomeScreen = ({navigation}: HomeScreenProps): JSX.Element => {
  return (
    <HomeConnected
      onPressItem={code => navigation.navigate(Screen.CountryScreen, {code})}
    />
  );
};
