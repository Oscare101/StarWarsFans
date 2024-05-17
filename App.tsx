import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import React from 'react';
import AppComponent from './components/global/AppComponent';

export default function App() {
  return (
    <Provider store={store}>
      <AppComponent />
    </Provider>
  );
}
