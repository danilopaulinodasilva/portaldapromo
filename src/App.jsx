import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useExitIntent } from "use-exit-intent";
import { Topbar } from "./components/Topbar";
import { Menu } from "./components/Menu";
import { Footer } from "./components/Footer";
import { Homepage } from "./components/Homepage";
import { Page } from "./components/Page";
import { NotFoundPage } from "./components/NotFoundPage";
import ContactForm from "./components/ContactForm";
import AutoOpenModal from "./components/AutoOpenModal";

function App() {
  const [showExitModal, setShowExitModal] = useState(false);
  const { registerHandler } = useExitIntent({
    desktop: {
      delayInSecondsToTrigger: 5,
      triggerOnIdle: true,
      // triggerOnMouseLeave: true,
    },
    mobile: {
      delayInSecondsToTrigger: 10,
      triggerOnIdle: true,
    },
  });

  registerHandler({
    id: "exit-intent-modal",
    handler: () => setShowExitModal(true),
  });

  return (
    <>
      <Topbar />
      <Menu />
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/contato" element={<ContactForm />} />
          <Route path="/:pageUri" element={<Page />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
      <Footer />
      {showExitModal && <AutoOpenModal />}
    </>
  );
}

export default App;
