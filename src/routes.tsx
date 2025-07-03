import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Curriculum from './Components/01-Curriculum/Curriculum';
import Aboutme from './Components/Z-pages/Aboutme';

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
      }
    ]
  }
]);

export default router;
