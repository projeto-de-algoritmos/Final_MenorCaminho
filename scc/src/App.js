import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Result from './pages/Result';
import './styles/global.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/result',
    element: <Result />,
  }
]); 

export default function App()
{
  return(
    <RouterProvider router={ router } />
  );
};