import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Curriculum from './Components/01-Curriculum/Curriculum';
import Aboutme from './Components/Z-pages/Aboutme';
import Projects from './Components/Z-pages/Projects';
import QRCodePage from './Components/qrcode/qrcode';
import CurriculumWeb from './pages/CurriculumWeb';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Aboutme />
      },
      {
        path: "curriculum",
        element: <Curriculum />
      },
      {
        path: "projects",
        element: <Projects />
      },
      {
        path: "qrcode",
        element: <QRCodePage />
      },
      {
        path: "curriculumweb",
        element: <CurriculumWeb />
      }
    ]
  }
]);

export default router;
