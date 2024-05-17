import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';
import LikedPageSelectorBlock from '../components/LikedPageSelectorBlock';
import colors from '../constants/colors';
import {RootState} from '../redux';
import {useSelector} from 'react-redux';

export default function LikesScreen({route}: any) {
  const [page, setPage] = useState<string>(route.params.page);

  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: any = theme === 'system' ? systemTheme : theme;
  const likedCharacters: any[] = useSelector(
    (state: RootState) => state.likedCharacters,
  );

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: colors[themeColor].bg}]}>
      <Header title="Characters you liked" />
      <LikedPageSelectorBlock
        page={page}
        onSelect={(value: string) => setPage(value)}
      />
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
