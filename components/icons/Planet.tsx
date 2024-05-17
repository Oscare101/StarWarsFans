export default function Planet(color: string) {
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
