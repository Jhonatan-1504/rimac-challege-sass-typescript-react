import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "@/pages/Home";
import Plan from "@/pages/Plan";
import Resumen from "@/pages/Resumen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/plans" Component={Plan} />
        <Route path="/resumen" Component={Resumen} />
      </Routes>
    </Router>
  );
}

export default App;
