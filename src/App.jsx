import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Topbar } from "./components/Topbar";
import { Menu } from "./components/Menu";
import { Hero } from "./components/Hero";
import { Featured } from "./components/Featured";
import { Offers } from "./components/Offers";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Topbar />
      <Menu />
      <Hero />
      <Featured />
      <Offers />
      <Footer />
    </>
  );
}

export default App;
