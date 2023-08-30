// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Vuetify
import { createVuetify } from "vuetify";

const myCustomLightTheme = {
  dark: false,
  colors: {
    background: "495579",
    surface: "263159",
    primary: "FFFBEB",
    primarydark: "#10193e",
    primaryflat: "#3D56B2",
    primarylight: "#5C7AEA",
    primarybright: "#6D02F0",
    primarybg: "495579",
    accent: "263159",
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
