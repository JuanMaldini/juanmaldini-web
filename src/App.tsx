import './App.css'
import Navbar from './Components/00-Navbar/Navbar'
import Curriculum from './Components/01-Curriculum/Curriculum';
import DescriptionSection from './Components/Description/DescriptionSection';
import Footer from './Components/Z-Footer/Footer';

function App() {

  return (
    <>
    <Navbar/>
    {/* <DescriptionSection/> */}
    <Curriculum/>
    <Footer/>
    </>
  )
}

export default App;
