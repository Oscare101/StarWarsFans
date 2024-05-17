export default function Gender(color: string) {
  return `<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M256 384C326.692 384 384 326.692 384 256C384 185.308 326.692 128 256 128C185.308 128 128 185.308 128 256C128 326.692 185.308 384 256 384Z" stroke=${color} stroke-width="32" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M448 352L352 448M176 80L80.02 175.98M464 128V48M464 48H384M464 48L346.5 165.5M48 128V48M48 48H128M48 48L165.49 165.49M464 464L346.65 346.37" stroke=${color} stroke-width="32" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
}
