import { Header } from "./layout/Header.tsx";
import { Utp } from "./layout/sections/utp/Utp.tsx";
import { Skills } from "./layout/sections/skills/Skills.tsx";
import { Line } from "./components/Line.tsx";

function App() {
  return (
    <>
      <Header />
      <Utp />
      <Line />
      <Skills />
    </>
  );
}

export default App;
