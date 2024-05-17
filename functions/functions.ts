import {StarWarsData} from '../constants/interfaces';

export function GetPageNumber(
  next: StarWarsData['next'],
  previous: StarWarsData['previous'],
) {
  const page = next
    ? +next?.split('page=')[1] - 1
    : previous
    ? +previous?.split('page=')[1] + 1
    : '';

  return page;
}

export function GetPageAmount(count: number) {
  return Math.ceil(count / 10);
}

export function MakePageArray(pagesAmount: number) {
  let arr: number[] = [];
  for (let i = 0; i < pagesAmount; i++) {
    arr.push(i + 1);
  }
  return arr;
}

export function GetUpdatedLikedCharacters(
  likedCharacters: any[],
  character: any,
) {
  if (likedCharacters.find((c: any) => c.name === character.name)) {
    const filteredCharacters = likedCharacters.filter(
      (c: any) => c.name !== character.name,
    );
    return filteredCharacters;
  } else {
    return [...likedCharacters, character];
  }
}

export function GetFilteredMaleCharacters(likedCharacters: any[]) {
  return likedCharacters.filter((c: any) => c.gender === 'male');
}

export function GetFilteredFemaleCharacters(likedCharacters: any[]) {
  return likedCharacters.filter((c: any) => c.gender === 'female');
}

export function GetFilteredOtherCharacters(likedCharacters: any[]) {
  return likedCharacters.filter(
    (c: any) => c.gender !== 'male' && c.gender !== 'female',
  );
}
