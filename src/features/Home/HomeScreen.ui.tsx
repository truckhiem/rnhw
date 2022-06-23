import React from 'react';
import {Text} from 'react-native-paper';
import {
  FlatList,
  View,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import CountryFlag from 'react-native-country-flag';
import {useStyle} from './styles';
import {CountryItemProps, HomeUIProps} from './types';

const Header = (): JSX.Element => {
  const {styles} = useStyle();
  return (
    <>
      <View style={styles.headerBackground} />
      <Text style={styles.headerText}>List of countries</Text>
    </>
  );
};

const CountryItem = ({item, onPressItem}: CountryItemProps): JSX.Element => {
  const {styles} = useStyle();
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => onPressItem(item.code)}>
      <CountryFlag isoCode={item.code} size={40} />
      <View style={styles.itemGroupName}>
        <Text style={styles.itemTextName}>{item.name}</Text>
        <Text>{item.capital}</Text>
      </View>
    </TouchableOpacity>
  );
};

export const HomeUI = ({
  countries,
  isLoading,
  onPressItem,
}: HomeUIProps): JSX.Element => {
  const {styles} = useStyle();
  if (isLoading) return <ActivityIndicator size="large" />;
  return (
    <FlatList
      style={styles.container}
      data={countries || []}
      ListHeaderComponent={<Header />}
      keyExtractor={item => item.code}
      renderItem={({item}) => (
        <CountryItem item={item} onPressItem={onPressItem} />
      )}
    />
  );
};
