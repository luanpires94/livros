import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import LivrosDoados from "./components/LivrosDoados";
import QueroDoar from "./components/QueroDoar";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/livros-doados" element={<LivrosDoados />} />
        <Route path="/quero-doar" element={<QueroDoar />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
