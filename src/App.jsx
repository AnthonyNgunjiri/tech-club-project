import "./assets/global.css";
import Headers from "./component/Header/Headers";
import Home from "./pages/Home/Home";
import Leaders from "./pages/Leaders/Leaders";
import Tracks from "./pages/Tracks/Tracks";
import Events from "./pages/Events/Events";
import Footer from "./component/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
      { <Headers /> }
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/leaders" element={<Leaders />} />
          <Route path="/tracks" element={<Tracks />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
