export const COLORS = {
  darkMain: "#424B5A",
  darkSecondary: "#686E79",

  liteGrey: "#F4F6F9",
  liteWhite: "#FFFFFF",

  red: "#F65C34",
  redLite: "#FEEFEB",

  green: "#4DC591",
  greenLite: "#EDF9F4",

  orange: "#FFB662",
  orangeLite: "#FFF6EC",

  blue: "#66C2FF",
  blueLite: "#E8F6FF",

  pink: "#E091C9",
  pinkLite: "#FBF2F9"
};

export const SIZES = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px"
};

export const DEVICE = {
  mobileS: `(min-width: ${SIZES.mobileS})`,
  mobileM: `(min-width: ${SIZES.mobileM})`,
  mobileL: `(min-width: ${SIZES.mobileL})`,
  tablet: `(min-width: ${SIZES.tablet})`,
  laptop: `(min-width: ${SIZES.laptop})`,
  laptopL: `(min-width: ${SIZES.laptopL})`,
  desktop: `(min-width: ${SIZES.desktop})`,
  desktopL: `(min-width: ${SIZES.desktop})`
};
