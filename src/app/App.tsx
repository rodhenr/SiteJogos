import { Routes, Route } from "react-router-dom";

import Home from "../pages/home/Home";
import Records from "../pages/Records";
import Faq from "../pages/Faq";
import Games from "../pages/Games";
import Ranking from "../pages/Ranking";
import Uno from "../features/game/pages/Uno";
import Jokenpo from "../features/game/pages/Jokenpo";
import TicTacToe from "../features/game/pages/TicTacToe";
import Yahtzee from "../features/game/pages/Yahtzee";
import NotFound from "../pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="jogos" element={<Games />} />
        <Route path="ranking" element={<Ranking />} />
        <Route path="recordes" element={<Records />} />
        <Route path="faq" element={<Faq />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="/jogos/*">
        <Route path="uno" element={<Uno />} />
        <Route path="jokenpo" element={<Jokenpo />} />
        <Route path="tictactoe" element={<TicTacToe />} />
        <Route path="yahtzee" element={<Yahtzee />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
