import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {useTheme} from 'react-native-paper';

export type NamedStyles<T> = {
  [P in keyof T]: ViewStyle | TextStyle | ImageStyle;
};

export type ThemedStyleHookResult<T> = {
  styles: T | NamedStyles<T>;
  theme: ReactNativePaper.Theme;
};

export const themedStyleHook = <
  T extends NamedStyles<T> | NamedStyles<unknown>
>(
  func: (theme: ReactNativePaper.Theme) => T | NamedStyles<T>,
) => {
  return (): ThemedStyleHookResult<T> => {
    const theme = useTheme();
    return {
      styles: StyleSheet.create(func(theme)),
      theme,
    };
  };
};

export const tsh = themedStyleHook;
