import {StarWarsData} from '../constants/interfaces';

export async function GetDataRequest(url?: StarWarsData['next']) {
  const response = await fetch(url || 'https://swapi.py4e.com/api/people');
  const data = await response.json();
  return data;
}
