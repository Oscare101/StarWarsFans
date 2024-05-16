import {
  Button,
  Dimensions,
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
import {StarWarsData, Theme} from '../constants/interfaces';
import RenderCharacterItem from '../components/RenderCharacterItem';
import PageSelectorBlock from '../components/PageSelectorBlock';
import LoadingWarning from '../components/LoadingWarning';

const width = Dimensions.get('screen').width;

export default function MainScreen() {
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: Theme['value'] = theme === 'system' ? systemTheme : theme;
  const starWarsData: StarWarsData = useSelector(
    (state: RootState) => state.starWarsData,
  );

  const dispatch = useDispatch();

  async function GetData(url?: string) {
    const response = await GetDataRequest(url);
    dispatch(updateStarWarsData(response));
  }

  useEffect(() => {
    GetData();
  }, []);

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: colors[themeColor].bg}]}>
      {starWarsData?.results?.length ? (
        <FlatList
          data={starWarsData.results}
          renderItem={(item: any) => (
            <RenderCharacterItem item={item.item} theme={themeColor} />
          )}
          ItemSeparatorComponent={() => <View style={{height: width * 0.01}} />}
        />
      ) : (
        <LoadingWarning />
      )}
      <PageSelectorBlock />
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
