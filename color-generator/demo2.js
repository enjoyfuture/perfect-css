import {
  genWebColor,
  genMaterialColor,
  default as genRGBColor,
} from 'generate-color';

// return hex RGB value，eg. '#0000ff'
console.info(genRGBColor());
// return web standard CSS3 Color Modules Level 4 color, eg. '#ffffff'
console.info(genWebColor());
// return material style color, eg. '#448aff'
console.info(genMaterialColor());
