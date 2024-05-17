import {StarWarsData} from '../constants/interfaces';

export async function GetDataRequest(url?: StarWarsData['next']) {
  const response = await fetch(url || 'https://swapi.py4e.com/api/people');
  const data = await response.json();

  const charactersWithInfo = await Promise.all(
    data.results.map(async (character: any) => {
      const planetResponse = await fetch(character.homeworld);
      const planetData = await planetResponse.json();

      const speciesResponses = await Promise.all(
        character.species.map((url: any) => fetch(url)),
      );
      const speciesData = await Promise.all(
        speciesResponses.map(response => response.json()),
      );

      return {
        ...character,
        info: {homeworld: planetData, species: speciesData},
      };
    }),
  );
  return {...data, results: charactersWithInfo};
}
