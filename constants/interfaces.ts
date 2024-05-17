export interface StarWarsData {
  count: number;
  next: string | null;
  previous: string | null;
  results: Character[];
}

export interface Character {
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  info: any;
  mass: string;
  name: string;
  skin_color: string;
  species: string[];
  starships: string[];
  url: string;
  vehicles: string[];
}

export interface Theme {
  value: 'dark' | 'light';
}

export interface IconName {
  value:
    | 'heart'
    | 'heartFull'
    | 'chevronLeft'
    | 'chevronRight'
    | 'open'
    | 'gender'
    | 'planet'
    | 'person'
    | 'calendar'
    | 'settings';
}
