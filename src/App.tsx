import { Header } from "./layout/Header.tsx";
import { Utp } from "./layout/sections/utp/Utp.tsx";
import { Skills } from "./layout/sections/skills/Skills.tsx";
import { Cases } from "./layout/sections/cases/Cases.tsx";

function App() {
  return (
    <>
      <Header />
      <Utp />
      <Skills />
      <Cases />
    </>
  );
}

export default App;
