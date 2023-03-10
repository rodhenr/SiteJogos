import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Records from "./pages/Records";
import Faq from "./pages/Faq";
import Games from "./pages/Games";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="/jogos" element={<Games />} />
        <Route path="/recordes" element={<Records />} />
        <Route path="/faq" element={<Faq />} />
      </Route>
    </Routes>
  );
}

export default App;
