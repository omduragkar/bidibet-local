
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Navigator from './src/Navigator';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { store } from './src/store';
import { PaperProvider } from 'react-native-paper';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Navigator/>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}


export default App;
