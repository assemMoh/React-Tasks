import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { MyNavigation } from './components/MyNavigation';
import { ViewSpecs } from './components/ViewSpecs';
import { Cars } from './components/Cars';
import { ViewInfo } from './components/ViewInfo';
import { Home } from './components/Home';

function App() {
  return (
    <div >
      <MyNavigation />
      <Routes>
        <Route path='cars' element={<Cars /> }/>
        <Route path='home' element={<Home /> }/>
        <Route path='viewCars/:id' element={<ViewSpecs /> }/>
        <Route path='viewCars/:id/edit' element={<ViewInfo /> }/>
      </Routes>
    </div>
  );
}

export default App;
