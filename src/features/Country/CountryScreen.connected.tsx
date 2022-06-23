import React from 'react';
import {useQuery} from '@apollo/client';
import {CountryUI} from './CountryScreen.ui';
import {GET_COUNTRY} from '~/services/graphql/country';
import {CountryConnectedProps} from './types';

export const CountryConnected = ({
  countryCode,
  onPressContinent,
  onLoadedCountry,
}: CountryConnectedProps): JSX.Element => {
  const {loading, data} = useQuery(GET_COUNTRY, {
    variables: {
      code: countryCode.toUpperCase(),
    },
  });
  React.useEffect(() => {
    if (data?.country) {
      onLoadedCountry(data?.country.name);
    }
  }, [data?.country, onLoadedCountry]);
  return (
    <CountryUI
      data={data?.country}
      isLoading={loading}
      onPressContinent={onPressContinent}
    />
  );
};
