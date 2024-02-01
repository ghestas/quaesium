import logo from './logo.svg';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import './App.css';
import Tesst from './test'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/about' element={ <Tesst /> } />
  )
);

function App() {
  return (
    <RouterProvider router={ router } />
  );
}

export default App;
