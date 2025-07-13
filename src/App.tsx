import { Outlet } from 'react-router-dom';
import Navbar from "./Components/00-Navbar/Navbar";
import Footer from "./Components/Z-Footer/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
