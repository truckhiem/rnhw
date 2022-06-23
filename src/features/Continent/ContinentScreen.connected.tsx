import React from 'react';
import {useQuery} from '@apollo/client';
import {ContinentUI} from './ContinentScreen.ui';
import {GET_COUNTINENT} from '~/services/graphql/continent';
import {ContinentConnectedProps} from './types';

export const ContinentConnected = ({
  onPressItem,
  continentCode,
  onLoadedContinent,
}: ContinentConnectedProps): JSX.Element => {
  const {loading, data} = useQuery(GET_COUNTINENT, {
    variables: {
      code: continentCode.toUpperCase(),
    },
  });
  React.useEffect(() => {
    if (data?.continent) {
      onLoadedContinent(data?.continent.name);
    }
  }, [data?.continent, onLoadedContinent]);
  return (
    <ContinentUI
      data={data?.continent}
      isLoading={loading}
      onPressItem={onPressItem}
    />
  );
};
