import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Detail from './pages/Detail';
import Home from './pages/Home';
import Search from './pages/Search';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/detail/:id', element: <Detail /> },
  { path: '/videos', element: <Search /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
