import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import React from 'react';
import colors from '../constants/colors';
import {RootState} from '../redux';
import {useDispatch, useSelector} from 'react-redux';
import {Theme} from '../constants/interfaces';
import Icon from './Icon';
import {GetDataRequest} from '../functions/actions';
import {updateStarWarsData} from '../redux/starWarsDataSlice';

const width = Dimensions.get('screen').width;

export default function PageSelectorBlock() {
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: Theme['value'] = theme === 'system' ? systemTheme : theme;
  const starWarsData: any = useSelector(
    (state: RootState) => state.starWarsData,
  );
  const dispatch = useDispatch();

  async function GetData(url?: string) {
    const response = await GetDataRequest(url);
    dispatch(updateStarWarsData(response));
  }

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: colors[themeColor].card,
          borderColor: colors[themeColor].shadow,
        },
      ]}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => GetData(starWarsData?.previous)}
        disabled={!starWarsData?.previous}>
        {starWarsData?.previous ? (
          <Icon
            icon="chevronLeft"
            size={width * 0.1}
            color={colors[themeColor].main}
          />
        ) : (
          <></>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => GetData(starWarsData?.next)}
        disabled={!starWarsData?.next}>
        {starWarsData?.next ? (
          <Icon
            icon="chevronRight"
            size={width * 0.1}
            color={colors[themeColor].main}
          />
        ) : (
          <></>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: width * 0.92,
    marginVertical: width * 0.04,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: width * 0.02,
    borderRadius: width * 0.02,
    borderWidth: 1,
  },
});
