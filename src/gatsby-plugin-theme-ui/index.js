const theme = {
  breakpoints: ["@media (min-width: 400px)"],
  fonts: {
    body: "Commissioner",
    heading: "Commissioner",
    // monospace: "Menlo, monospace",
  },
  fontWeights: {
    body: 400,
    heading: 500,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  letterSpacings: {
    body: "normal",
    caps: "0.2em",
  },
  text: {
    heading1: {
      fontSize: 36,
    },
    heading2: {
      fontSize: [26, 36],
    },
    heading3: {
      fontSize: [16],
      fontWeight: 700,
      color: 'black'
    },
    heading3Alt: {
      fontSize: [16],
      fontWeight: 700,
      color: 'moderateCyan'
    },
    paragraph: {
      fontSize: [16],
      color: "darkGray",
    },
  },
  colors: {
    //light off-white background color
    background: "#F7F6F2",
    //primary- shades of cyan
    moderateCyan: "hsl(176, 50%, 47%)",
    darkCyan: "hsl(176, 72%, 28%)",

    //neutral
    black: "hsl(0, 0%, 0%)",
    darkGray: "hsl(0, 0%, 48%)",
  },
  buttons: {
    primary: {
      bg: 'moderateCyan',
      color: '#FFFFFF',
      cursor: 'pointer',
      borderRadius: 35,
      padding: '1em',
    },
  },
  cards: {
    primary: {
      background: '#FFFFFF',
      borderRadius: 8,
    }
  }
};

export default theme;
