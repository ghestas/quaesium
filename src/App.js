import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import './App.css';
import Landing from './Landing'
import Dashboard from './Dashboard';
import Game from './Game';
import Play from './Play';
import Learn from './Learn';


const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path='/' element={ Math.random() < 0.5 ? <Landing /> : <Dashboard /> } />,
    <Route path='/game/:id' element={ <Game /> } />,
    <Route path='/play' element={ <Play /> } />,
    <Route path='/learn/:id' element={ <Learn /> } />
  ]),
  {
    basename: '/build'
  }
);

function App() {
  return (
    <RouterProvider router={ router } />
  );
}

export default App;
