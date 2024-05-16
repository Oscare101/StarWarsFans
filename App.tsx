import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {GetDataRequest} from './functions/actions';

export default function App() {
  async function GetData() {
    const response = await GetDataRequest();
    console.log(response);
  }

  useEffect(() => {
    GetData();
  }, []);

  return (
    <View>
      <Text>App</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
