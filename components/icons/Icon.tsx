import {SvgXml} from 'react-native-svg';
import {IconName} from '../../constants/interfaces';
import Settings from './Settings';
import Person from './Person';
import Calendar from './Calendar';
import Planet from './Planet';
import Gender from './Gender';
import Open from './Open';
import ChevronRight from './ChevronRight';
import ChevronLeft from './ChevronLeft';
import HeartFull from './HeartFull';
import Heart from './Heart';

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
    open: (
      <SvgXml xml={Open(props.color)} width={props.size} height={props.size} />
    ),
    gender: (
      <SvgXml
        xml={Gender(props.color)}
        width={props.size}
        height={props.size}
      />
    ),
    planet: (
      <SvgXml
        xml={Planet(props.color)}
        width={props.size}
        height={props.size}
      />
    ),
    calendar: (
      <SvgXml
        xml={Calendar(props.color)}
        width={props.size}
        height={props.size}
      />
    ),
    person: (
      <SvgXml
        xml={Person(props.color)}
        width={props.size}
        height={props.size}
      />
    ),
    settings: (
      <SvgXml
        xml={Settings(props.color)}
        width={props.size}
        height={props.size}
      />
    ),
  };

  return icons[props.icon];
}
