import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Records from "./pages/Records";
import Faq from "./pages/Faq";
import Games from "./pages/Games";
import Ranking from "./pages/Ranking";
import Uno from "./pages/games/Uno";
import Jokenpo from "./pages/games/Jokenpo";
import TicTacToe from "./pages/games/TicTacToe";
import Yahtzee from "./pages/games/Yahtzee";

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
        <Route path="jokenpo" element={<Jokenpo />} />
        <Route path="tictactoe" element={<TicTacToe />} />
        <Route path="yahtzee" element={<Yahtzee />} />
      </Route>
    </Routes>
  );
}

export default App;
