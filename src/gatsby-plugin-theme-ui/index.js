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
      fontSize: [22],
      fontWeight: 700,
    },
    heading3: {
      fontSize: [16],
      fontWeight: 700,
      color: "black",
    },
    heading3Alt: {
      fontSize: [16],
      fontWeight: 700,
      color: "moderateCyan",
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
      cursor: "pointer",
      bg: "moderateCyan",
      color: "#FFFFFF",
      // cursor: 'pointer',
      borderRadius: 35,
      padding: "1em",
      margin: '1em',
      "&:active": {
        bg: "darkCyan",
      },
    },
    // alt: {
    //   bg: "#FFFFFF",

    //   "&:active": {
    //     outlineColor: "moderateCyan",
    //   },
    // },
  },
  cards: {
    primary: {
      background: "#FFFFFF",
      borderRadius: 8,
    },
    modal: {
      border: "1px solid",
      borderColor: 'darkGray',
      borderRadius: 8,
    },
    activeModal: {
      border: "1px solid",
      borderColor: 'moderateCyan',
      borderRadius: 8,
    },
  },
  progress: {
    color: "moderateCyan",
    height: 10,
    width: "90%",
  },
  forms: {
    radio: {
      cursor: "pointer",
      color: 'moderateCyan',
      borderColor: 'darkGray',
    },
    input: {
      textAlign: 'center',
      cursor: "pointer",
      color: "black",
      border: "1px solid darkGray",
      borderRadius: 35,
      width: 100,
      p: '1em',
      margin: '1em',
      "&:focus": {
        color: "black",
        fontWeight: 700,
        outline: 'none',
        border: "1px solid",
        borderColor: 'moderateCyan',
      },
    },
  },
};

export default theme;
