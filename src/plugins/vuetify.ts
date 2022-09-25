// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Vuetify
import { createVuetify } from "vuetify";

const myCustomLightTheme = {
  dark: false,
  colors: {
    background: "#FFFFFF",
    surface: "#FFFFFF",
    primary: "#5602BD",
    primarydark: "#330170",
    primaryflat: "#462370",
    primarylight: "#964BF2",
    primarybright: "#6D02F0",
    primarybg: "#DCC7F6",
    secondary: "#03DAC6",
    "secondary-darken-1": "#018786",
    error: "#B00020",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00",
    chesswhite: "#fff2cc",
    chessblack: "#999999",
    win: "#b6d7a8",
    loss: "#ea9999",
    draw: "#ffe599",
  },
};

export default createVuetify({
  theme: {
    defaultTheme: "myCustomLightTheme",
    themes: {
      myCustomLightTheme,
    },
  },
});
