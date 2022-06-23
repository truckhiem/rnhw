import React from 'react';
import {ApolloProvider} from '@apollo/client';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {client} from './services';
import {
  Provider as PaperProvider,
  DefaultTheme,
  DarkTheme,
} from 'react-native-paper';
import {AppNavigationStack} from './navigations';
import {FloatingButton} from './elements/FloatingButton';

export const App = (): JSX.Element => {
  const [isDark, setIsDark] = React.useState(false);
  return (
    <ApolloProvider client={client}>
      <PaperProvider theme={isDark ? DarkTheme : DefaultTheme}>
        <SafeAreaProvider>
          <AppNavigationStack isDark={isDark} />
          <FloatingButton
            onPress={() => setIsDark(isDarkOld => !isDarkOld)}
            isDark={isDark}
          />
        </SafeAreaProvider>
      </PaperProvider>
    </ApolloProvider>
  );
};
