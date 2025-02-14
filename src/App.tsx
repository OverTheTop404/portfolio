import { Header } from "./layout/Header.tsx";
import { Utp } from "./layout/sections/utp/Utp.tsx";
import { Skills } from "./layout/sections/skills/Skills.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import { Cases } from "./layout/sections/cases/Cases.tsx";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Utp />
        <Skills />
        <Cases />
      </Router>
    </>
  );
}

export default App;
