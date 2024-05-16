import {Dimensions, StyleSheet, Text, View, useColorScheme} from 'react-native';
import React from 'react';
import {
  GetPageAmount,
  GetPageNumber,
  MakePageArray,
} from '../functions/functions';
import {RootState} from '../redux';
import {useSelector} from 'react-redux';
import {StarWarsData, Theme} from '../constants/interfaces';
import colors from '../constants/colors';

const width = Dimensions.get('screen').width;

export default function PageCountBlock() {
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: Theme['value'] = theme === 'system' ? systemTheme : theme;
  const starWarsData: StarWarsData = useSelector(
    (state: RootState) => state.starWarsData,
  );

  function PageTitle(props: {page: number}) {
    const currentPage: boolean =
      props.page === GetPageNumber(starWarsData.next, starWarsData.previous);
    return (
      <Text
        style={[
          styles.pageTitle,
          {
            color: currentPage
              ? colors[themeColor].main
              : colors[themeColor].comment,
          },
        ]}>
        {currentPage ? props.page : '_'}
      </Text>
    );
  }

  return (
    <View style={styles.card}>
      {MakePageArray(GetPageAmount(starWarsData.count)).map(
        (page: number, index: number) => (
          <PageTitle key={index} page={page} />
        ),
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width * 0.5,
  },
  pageTitle: {
    fontSize: width * 0.05,
  },
});
