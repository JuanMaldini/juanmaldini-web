import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Curriculum from './Components/01-Curriculum/Curriculum';
import Aboutme from './Components/Z-pages/Aboutme';
import Projects from './Components/Z-pages/Projects';


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
      }
    ]
  }
]);

export default router;
