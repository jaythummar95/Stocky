/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {ThemeProvider} from '@shopify/restyle';
import React from 'react';
import theme from './src/style/Theme';
import {AppNavigation} from './src/navigation/AppNavigation';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppNavigation />
    </ThemeProvider>
  );
};

export default App;
