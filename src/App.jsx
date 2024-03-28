import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Topbar } from "./components/Topbar";
import { Menu } from "./components/Menu";
import { Footer } from "./components/Footer";
import { Homepage } from "./components/Homepage";
import { Page } from "./components/Page";
import { NotFoundPage } from "./components/NotFoundPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Topbar />
      <Menu />
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/:pageUri" element={<Page />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
