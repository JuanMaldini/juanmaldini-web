import "./App.css";
import Navbar from "./Components/00-Navbar/Navbar";
import Aboutme from "./Components/Z-pages/Aboutme";
import Footer from "./Components/Z-Footer/Footer";
import Curriculum from "./Components/01-Curriculum/Curriculum";

function App() {
  return (
    <>
      <Navbar />
      <Aboutme />
      {/* <Curriculum/> */}
      <Footer />
    </>
  );
}

export default App;
