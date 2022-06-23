import React from 'react';
import {useQuery} from '@apollo/client';
import {HomeUI} from './HomeScreen.ui';
import {GET_COUNTRIES} from '~/services/graphql/countries';
import {HomeConnectedProps} from './types';

export const HomeConnected = ({
  onPressItem,
}: HomeConnectedProps): JSX.Element => {
  const {loading, data} = useQuery(GET_COUNTRIES);
  return (
    <HomeUI
      countries={data?.countries}
      isLoading={loading}
      onPressItem={onPressItem}
    />
  );
};
