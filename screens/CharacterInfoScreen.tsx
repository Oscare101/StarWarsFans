import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux';
import colors from '../constants/colors';
import Icon from '../components/icons/Icon';
import Header from '../components/global/Header';
import {updateLikedCharacters} from '../redux/likedCharacters';
import {GetUpdatedLikedCharacters} from '../functions/functions';

const width = Dimensions.get('screen').width;

export default function CharacterInfoScreen({navigation, route}: any) {
  const character = route.params.character;

  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: any = theme === 'system' ? systemTheme : theme;
  const likedCharacters: any[] = useSelector(
    (state: RootState) => state.likedCharacters,
  );

  const info = [
    {title: 'Birth year', value: character.birth_year},
    {title: 'Gender', value: character.gender},
    {title: 'Home planet', value: character.info.homeworld.name},
    {
      title: 'Species',
      value: character.info.species.map((i: any) => i.name).join(',') || '???',
    },
  ];

  const liked: boolean = likedCharacters.find(
    (c: any) => c.name === character.name,
  );
  const dispatch = useDispatch();

  function LikeCharacter() {
    dispatch(
      updateLikedCharacters(
        GetUpdatedLikedCharacters(likedCharacters, character),
      ),
    );
  }

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: colors[themeColor].bg}]}>
      <Header title={character.name} />
      <View style={[styles.card, {backgroundColor: colors[themeColor].card}]}>
        {info.map((item: any, index: number) => (
          <View key={index} style={styles.characterInfoRow}>
            <Text style={[styles.infoTitle, {color: colors[themeColor].grey}]}>
              {item.title}
            </Text>
            <Text style={[styles.infoValue, {color: colors[themeColor].main}]}>
              {item.value}
            </Text>
          </View>
        ))}
      </View>
      <TouchableOpacity
        style={[styles.likeButton, {backgroundColor: colors[themeColor].card}]}
        activeOpacity={0.8}
        onPress={LikeCharacter}>
        <Text style={[styles.likeTitle, {color: colors[themeColor].grey}]}>
          {liked ? 'liked' : 'like'}
        </Text>
        <Icon
          icon={liked ? 'heartFull' : 'heart'}
          color={liked ? colors[themeColor].accent : colors[themeColor].comment}
          size={width * 0.06}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: width * 0.02,
  },
  card: {
    width: '92%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: width * 0.02,
    borderRadius: width * 0.02,
    gap: width * 0.01,
  },
  characterInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  infoTitle: {fontSize: width * 0.05},
  infoValue: {fontSize: width * 0.05},
  likeButton: {
    width: '92%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: width * 0.02,
    borderRadius: width * 0.02,
  },
  likeTitle: {fontSize: width * 0.05},
});

const a = {
  birth_year: '47BBY',
  created: '2014-12-10T15:53:41.121000Z',
  edited: '2014-12-20T21:17:50.319000Z',
  eye_color: 'blue',
  films: [
    'https://swapi.py4e.com/api/films/1/',
    'https://swapi.py4e.com/api/films/5/',
    'https://swapi.py4e.com/api/films/6/',
  ],
  gender: 'female',
  hair_color: 'brown',
  height: '165',
  homeworld: 'https://swapi.py4e.com/api/planets/1/',
  info: {
    homeworld: {
      climate: 'arid',
      created: '2014-12-09T13:50:49.641000Z',
      diameter: '10465',
      edited: '2014-12-20T20:58:18.411000Z',
      films: [Array],
      gravity: '1 standard',
      name: 'Tatooine',
      orbital_period: '304',
      population: '200000',
      residents: [Array],
      rotation_period: '23',
      surface_water: '1',
      terrain: 'desert',
      url: 'https://swapi.py4e.com/api/planets/1/',
    },
    species: [[Object]],
  },
  mass: '75',
  name: 'Beru Whitesun lars',
  skin_color: 'light',
  species: ['https://swapi.py4e.com/api/species/1/'],
  starships: [],
  url: 'https://swapi.py4e.com/api/people/7/',
  vehicles: [],
};
