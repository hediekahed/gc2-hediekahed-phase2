import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LodgingDetail from "./pages/LodgingDetail";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/lodgings/:id" element={<LodgingDetail />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
