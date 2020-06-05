import UnionOtf from "../fonts/Union-Regular.otf";
import UnionItalicOtf from "../fonts/Union-Regular-Italic.otf";
import UnionBoldOtf from "../fonts/Union-Bold.otf";
import UnionBoldItalicOtf from "../fonts/Union-Bold-Italic.otf";

const UnionFont = {
  fontFamily: 'Union',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('Union'),
    local('Union-Regular'),
    url(${UnionOtf}) format('otf')
  `,
};
const UnionItalicFont = {
  fontFamily: 'Union',
  fontStyle: 'italic',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('Union-Regular-Italic'),
    url(${UnionItalicOtf}) format('otf')
  `,
};
const UnionBoldFont = {
  fontFamily: 'Union',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 600,
  src: `
    local('Union-Bold'),
    url(${UnionBoldOtf}) format('otf')
  `,
};
const UnionBoldItalicFont = {
  fontFamily: 'Union',
  fontStyle: 'italic',
  fontDisplay: 'swap',
  fontWeight: 600,
  src: `
    local('Union-Bold-Italic'),
    url(${UnionBoldItalicOtf}) format('otf')
  `,
};

export default (theme) => ({
  "@global": {
    "@font-face": [UnionFont, UnionItalicFont, UnionBoldFont, UnionBoldItalicFont],
  }
});