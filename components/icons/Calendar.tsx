export default function Calendar(color: string) {
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
