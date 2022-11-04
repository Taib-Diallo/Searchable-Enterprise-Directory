// screen sizes
const sizes = {
  tablet: "870px",
  laptop: "1024px",
  desktop: "1440px",
};

// media queries for screen sizes
const devices = {
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  desktop: `(min-width: ${sizes.desktop})`,
};

module.exports = devices;
