import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import './App.scss';
import Home from "./pages/home/home";
import Header from "./components/header/header";
import Aboutme from "./pages/aboutme/aboutme";
import Research from "./pages/research/research";
import Contact from "./pages/contact/contact";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<Aboutme />} />
          <Route path="/research" element={<Research />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
