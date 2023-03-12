import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Records from "./pages/Records";
import Faq from "./pages/Faq";
import Games from "./pages/Games";
import Ranking from "./pages/Ranking";
import Uno from "./pages/games/Uno";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="jogos" element={<Games />} />
        <Route path="ranking" element={<Ranking />} />
        <Route path="recordes" element={<Records />} />
        <Route path="faq" element={<Faq />} />
      </Route>
      <Route path="/jogos/*">
        <Route path="uno" element={<Uno />} />
      </Route>
    </Routes>
  );
}

export default App;
