import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import React, {useEffect} from 'react';
import {GetDataRequest} from './functions/actions';
import {NavigationContainer} from '@react-navigation/native';
import AppComponent from './components/AppComponent';

export default function App() {
  async function GetData() {
    const response = await GetDataRequest();
    console.log(response);
  }

  useEffect(() => {
    GetData();
  }, []);

  return (
    <Provider store={store}>
      <AppComponent />
    </Provider>
  );
}
