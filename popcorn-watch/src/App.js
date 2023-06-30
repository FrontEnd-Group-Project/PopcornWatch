import "./App.css";
import {Home} from './routes/Home'
import { 
  createBrowserRouter,
  RouterProvider,
  } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },
])

function App() {
  return (
    <div className='mt-4 mx-auto h-75 w-75'>
      <RouterProvider router={router}/>
    </div>
  );
}


export {App};
