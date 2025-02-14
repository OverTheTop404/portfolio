import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { GlobalStyled } from "./styles/Global.styled.ts";

createRoot(document.getElementById("root")!).render(
  <>
    <GlobalStyled />
    <App />
  </>,
);
