import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import MenuSections from './pages/MenuSections';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/mymenu",
      element: <MenuSections />,
    },
  ]);

  return (
    <div>
        <RouterProvider router={router} />
    </div>      
  )
}

export default App
