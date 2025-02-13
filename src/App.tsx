import { Header } from "./layout/Header.tsx";
import { Utp } from "./layout/sections/utp/Utp.tsx";
import { Skills } from "./layout/sections/skills/Skills.tsx";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Utp addLine={true} />
        <Skills />
      </Router>
    </>
  );
}

export default App;
