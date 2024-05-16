import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import React, {useState} from 'react';
import colors from '../constants/colors';
import {RootState} from '../redux';
import {useDispatch, useSelector} from 'react-redux';
import {StarWarsData, Theme} from '../constants/interfaces';
import Icon from './Icon';
import {GetDataRequest} from '../functions/actions';
import {updateStarWarsData} from '../redux/starWarsDataSlice';

const width = Dimensions.get('screen').width;

export default function PageSelectorBlock() {
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: Theme['value'] = theme === 'system' ? systemTheme : theme;
  const starWarsData: StarWarsData = useSelector(
    (state: RootState) => state.starWarsData,
  );
  const dispatch = useDispatch();

  const [loading, setLoading] = useState<boolean>(false);

  async function GetData(url?: StarWarsData['next']) {
    setLoading(true);
    const response = await GetDataRequest(url);
    dispatch(updateStarWarsData(response));
    setLoading(false);
  }

  function GetPageNumber() {
    const page = starWarsData.next
      ? +starWarsData.next?.split('page=')[1] - 1
      : starWarsData.previous
      ? +starWarsData.previous?.split('page=')[1] + 1
      : '';

    return page;
  }

  function GetPageAmount() {
    return Math.ceil(starWarsData.count / 10);
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
        onPress={() => GetData(starWarsData.previous)}
        disabled={!starWarsData?.previous || loading}
        style={styles.pageButton}>
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
      <Text>
        {GetPageNumber()}/{GetPageAmount()}
      </Text>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => GetData(starWarsData.next)}
        disabled={!starWarsData?.next || loading}
        style={styles.pageButton}>
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
    height: width * 0.15,
    width: width * 0.92,
    marginBottom: width * 0.04,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // padding: width * 0.02,
    borderRadius: width * 0.02,
    borderWidth: 1,
  },
  pageButton: {
    height: '100%',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
