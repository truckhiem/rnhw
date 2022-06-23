import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {Images} from '../../../res';
import {useStyle} from './styles';
import {FloatingButtonProps} from './types';

export const FloatingButton = ({
  onPress,
  isDark,
}: FloatingButtonProps): JSX.Element => {
  const {styles} = useStyle();
  return (
    <TouchableOpacity onPress={onPress} style={styles.floatingButton}>
      <Image source={isDark ? Images.iconLightOn : Images.iconLightOff} />
    </TouchableOpacity>
  );
};
