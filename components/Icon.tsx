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

function Open(color: string) {
  return `<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M384 224V408C384 413.253 382.965 418.454 380.955 423.307C378.945 428.16 375.999 432.57 372.284 436.284C368.57 439.999 364.16 442.945 359.307 444.955C354.454 446.965 349.253 448 344 448H104C93.3913 448 83.2172 443.786 75.7157 436.284C68.2143 428.783 64 418.609 64 408V168C64 157.391 68.2143 147.217 75.7157 139.716C83.2172 132.214 93.3913 128 104 128H271.48M336 64H448V176M224 288L440 72" stroke=${color} stroke-width="32" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
}

function Gender(color: string) {
  return `<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M256 384C326.692 384 384 326.692 384 256C384 185.308 326.692 128 256 128C185.308 128 128 185.308 128 256C128 326.692 185.308 384 256 384Z" stroke=${color} stroke-width="32" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M448 352L352 448M176 80L80.02 175.98M464 128V48M464 48H384M464 48L346.5 165.5M48 128V48M48 48H128M48 48L165.49 165.49M464 464L346.65 346.37" stroke=${color} stroke-width="32" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
}

function Planet(color: string) {
  return `<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2484_13)">
<path d="M413.48 284.46C472.35 331.7 505.09 373.46 493.79 393.01C475.94 423.86 355.01 387.53 223.69 311.86C92.37 236.19 0.370039 149.84 18.21 119C29.37 99.72 80.7901 106.68 149.85 133.09" stroke=${color} stroke-width="32" stroke-miterlimit="10"/>
<path d="M256 416C344.366 416 416 344.366 416 256C416 167.634 344.366 96 256 96C167.634 96 96 167.634 96 256C96 344.366 167.634 416 256 416Z" stroke=${color} stroke-width="32" stroke-miterlimit="10"/>
</g>
<defs>
<clipPath id="clip0_2484_13">
<rect width="512" height="512" fill="white"/>
</clipPath>
</defs>
</svg>`;
}

function Calendar(color: string) {
  return `<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M416 80H96C69.4903 80 48 101.49 48 128V416C48 442.51 69.4903 464 96 464H416C442.51 464 464 442.51 464 416V128C464 101.49 442.51 80 416 80Z" stroke=${color} stroke-width="32" stroke-linejoin="round"/>
<path d="M296 256C309.255 256 320 245.255 320 232C320 218.745 309.255 208 296 208C282.745 208 272 218.745 272 232C272 245.255 282.745 256 296 256Z" fill=${color}/>
<path d="M376 256C389.255 256 400 245.255 400 232C400 218.745 389.255 208 376 208C362.745 208 352 218.745 352 232C352 245.255 362.745 256 376 256Z" fill=${color}/>
<path d="M296 336C309.255 336 320 325.255 320 312C320 298.745 309.255 288 296 288C282.745 288 272 298.745 272 312C272 325.255 282.745 336 296 336Z" fill=${color}/>
<path d="M376 336C389.255 336 400 325.255 400 312C400 298.745 389.255 288 376 288C362.745 288 352 298.745 352 312C352 325.255 362.745 336 376 336Z" fill=${color}/>
<path d="M136 336C149.255 336 160 325.255 160 312C160 298.745 149.255 288 136 288C122.745 288 112 298.745 112 312C112 325.255 122.745 336 136 336Z" fill=${color}/>
<path d="M216 336C229.255 336 240 325.255 240 312C240 298.745 229.255 288 216 288C202.745 288 192 298.745 192 312C192 325.255 202.745 336 216 336Z" fill=${color}/>
<path d="M136 416C149.255 416 160 405.255 160 392C160 378.745 149.255 368 136 368C122.745 368 112 378.745 112 392C112 405.255 122.745 416 136 416Z" fill=${color}/>
<path d="M216 416C229.255 416 240 405.255 240 392C240 378.745 229.255 368 216 368C202.745 368 192 378.745 192 392C192 405.255 202.745 416 216 416Z" fill=${color}/>
<path d="M296 416C309.255 416 320 405.255 320 392C320 378.745 309.255 368 296 368C282.745 368 272 378.745 272 392C272 405.255 282.745 416 296 416Z" fill=${color}/>
<path d="M128 48V80M384 48V80" stroke=${color} stroke-width="32" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M464 160H48" stroke=${color} stroke-width="32" stroke-linejoin="round"/>
</svg>`;
}

function Person(color: string) {
  return `<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M344 144C340.08 196.87 300 240 256 240C212 240 171.85 196.88 168 144C164 89 203 48 256 48C309 48 348 90 344 144Z" stroke=${color} stroke-width="32" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M256 304C169 304 80.7 352 64.36 442.6C62.39 453.52 68.57 464 80 464H432C443.44 464 449.62 453.52 447.65 442.6C431.3 352 343 304 256 304Z" stroke=${color} stroke-width="32" stroke-miterlimit="10"/>
</svg>`;
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
  };

  return icons[props.icon];
}
