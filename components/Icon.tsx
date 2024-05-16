import {SvgXml} from 'react-native-svg';
import {IconName} from '../constants/interfaces';

function Heart(color: string) {
  return `<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M352.92 80C288 80 256 144 256 144C256 144 224 80 159.08 80C106.32 80 64.54 124.14 64 176.81C62.9 286.14 150.73 363.89 247 429.23C249.654 431.036 252.79 432.001 256 432.001C259.21 432.001 262.346 431.036 265 429.23C361.26 363.89 449.09 286.14 448 176.81C447.46 124.14 405.68 80 352.92 80Z" stroke=${color} stroke-width="32" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
}

function HeartFull(color: string) {
  return `<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M256 448C249.577 447.992 243.305 446.051 238 442.43C159.41 389.08 125.38 352.5 106.61 329.63C66.6099 280.88 47.4599 230.83 47.9999 176.63C48.6299 114.52 98.4599 64 159.08 64C203.16 64 233.69 88.83 251.47 109.51C252.033 110.158 252.729 110.679 253.511 111.035C254.292 111.391 255.141 111.576 256 111.576C256.859 111.576 257.708 111.391 258.489 111.035C259.271 110.679 259.967 110.158 260.53 109.51C278.31 88.81 308.84 64 352.92 64C413.54 64 463.37 114.52 464 176.64C464.54 230.85 445.37 280.9 405.39 329.64C386.62 352.51 352.59 389.09 274 442.44C268.694 446.058 262.422 447.995 256 448Z" fill=${color}/>
</svg>
`;
}

function ChevronLeft(color: string) {
  return `<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M328 112L184 256L328 400" stroke=${color} stroke-width="48" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
}

function ChevronRight(color: string) {
  return `<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M184 112L328 256L184 400" stroke=${color} stroke-width="48" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
}

export default function Icon(props: {
  icon: IconName['value'];
  size: number;
  color: string;
}) {
  const icons: Record<IconName['value'], any> = {
    heart: (
      <SvgXml xml={Heart(props.color)} width={props.size} height={props.size} />
    ),
    heartFull: (
      <SvgXml
        xml={HeartFull(props.color)}
        width={props.size}
        height={props.size}
      />
    ),
    chevronLeft: (
      <SvgXml
        xml={ChevronLeft(props.color)}
        width={props.size}
        height={props.size}
      />
    ),
    chevronRight: (
      <SvgXml
        xml={ChevronRight(props.color)}
        width={props.size}
        height={props.size}
      />
    ),
  };

  return icons[props.icon];
}
