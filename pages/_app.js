import "@/styles/globals.css";
import { createTheme, CssBaseline } from "@mui/material";

import { ThemeProvider } from "@mui/styles";
// import "bootstrap/dist/css/bootstrap.min.css";

export default function App({ Component, pageProps }) {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
