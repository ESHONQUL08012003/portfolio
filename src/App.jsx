import {Route, Routes} from "react-router-dom";
import Header from "./layout/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio"
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";

const App = () => {
  return (
    <>
      <Header/>
      <main>
        <Routes>
          <Route path="*" element={<ErrorPage/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/resume" element={<Resume/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </main>
    </>
  );
};

export default App;
