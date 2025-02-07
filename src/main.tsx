import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { GlobalStyled } from "./styles/Global.styled.ts";
import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/Theme.ts";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={Theme}>
    <GlobalStyled />
    <App />
  </ThemeProvider>,
);
