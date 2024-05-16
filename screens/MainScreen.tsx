import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {GetDataRequest} from '../functions/actions';
import {useDispatch, useSelector} from 'react-redux';
import {updateStarWarsData} from '../redux/starWarsDataSlice';
import {RootState} from '../redux';

export default function MainScreen() {
  const starWarsData: any = useSelector(
    (state: RootState) => state.starWarsData,
  );
  const dispatch = useDispatch();

  async function GetData() {
    const response = await GetDataRequest();
    dispatch(updateStarWarsData(response));
  }

  useEffect(() => {
    GetData();
  }, []);

  function RenderItem({item}: any) {
    return (
      <TouchableOpacity>
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>MainScreen</Text>
      <FlatList data={starWarsData?.results} renderItem={RenderItem} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
