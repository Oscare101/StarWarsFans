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
