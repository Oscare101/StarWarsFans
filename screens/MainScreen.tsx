import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {GetDataRequest} from '../functions/actions';
import {useDispatch, useSelector} from 'react-redux';
import {updateStarWarsData} from '../redux/starWarsDataSlice';
import {RootState} from '../redux';
import colors from '../constants/colors';
import {Theme} from '../constants/interfaces';

export default function MainScreen() {
  const starWarsData: any = useSelector(
    (state: RootState) => state.starWarsData,
  );
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: Theme['value'] = theme === 'system' ? systemTheme : theme;
  const dispatch = useDispatch();

  async function GetData(url?: string) {
    const response = await GetDataRequest(url);
    console.log(response);

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
    <SafeAreaView
      style={[styles.container, {backgroundColor: colors[themeColor].bg}]}>
      <FlatList data={starWarsData?.results} renderItem={RenderItem} />
      <Button title="a" onPress={() => GetData(starWarsData.next)} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
