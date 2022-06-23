import React from 'react';
import {Text} from 'react-native-paper';
import {
  FlatList,
  View,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {useStyle} from './styles';
import {ContinentUIProps} from './types';

export const ContinentUI = ({
  data,
  isLoading,
  onPressItem,
}: ContinentUIProps): JSX.Element => {
  const {styles} = useStyle();
  if (isLoading) return <ActivityIndicator size="large" />;
  if (!data) return <View />;
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.textValue}>Code</Text>
        <Text style={styles.textValue}>{data.code}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.textValue}>Countries</Text>
        <FlatList
          keyExtractor={item => item.code}
          data={data.countries || []}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.itemCountry}
              onPress={() => onPressItem(item.code)}>
              <Text style={styles.textCountry}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};
