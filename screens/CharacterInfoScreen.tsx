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
import {useSelector} from 'react-redux';
import {RootState} from '../redux';
import colors from '../constants/colors';
import Icon from '../components/Icon';
import Header from '../components/Header';

const width = Dimensions.get('screen').width;

export default function CharacterInfoScreen({navigation, route}: any) {
  const character = route.params.character;

  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: any = theme === 'system' ? systemTheme : theme;
  const likedCharacters: any[] = useSelector(
    (state: RootState) => state.likedCharacters,
  );

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: colors[themeColor].bg}]}>
      <Header title={character.name} />
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
