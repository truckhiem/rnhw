import React from 'react';
import {Text} from 'react-native-paper';
import {TouchableOpacity, View, ActivityIndicator} from 'react-native';
import CountryFlag from 'react-native-country-flag';
import {useStyle} from './styles';
import {CountryUIProps, RowItemProps} from './types';

const RowItem = ({title, value, onPress}: RowItemProps) => {
  const {styles} = useStyle();
  return (
    <View style={styles.row}>
      <Text style={styles.textValue}>{title}</Text>
      {onPress ? (
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.textValueTouchable}>{value}</Text>
        </TouchableOpacity>
      ) : (
        <Text style={styles.textValue}>{value}</Text>
      )}
    </View>
  );
};

export const CountryUI = ({
  data,
  isLoading,
  onPressContinent,
}: CountryUIProps): JSX.Element => {
  const {styles} = useStyle();
  if (isLoading) return <ActivityIndicator size="large" />;
  if (!data) return <View />;
  const onPress = () => {
    onPressContinent(data.continent.code, data.continent.name);
  };
  return (
    <View style={styles.container}>
      <CountryFlag isoCode={data.code} size={80} />
      <RowItem title="alpha2Code" value={data.code} />
      <RowItem title="callingCodes" value={`+${data.phone}`} />
      <RowItem
        title="continent"
        value={data.continent.name}
        onPress={onPress}
      />
    </View>
  );
};
