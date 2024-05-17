export interface StarWarsData {
  count: number;
  next: string | null;
  previous: string | null;
  results: any[];
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
    | 'calendar';
}
