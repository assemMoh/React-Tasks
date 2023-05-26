import './App.css';
import { Route, Routes } from 'react-router-dom';
import { MyNavigation } from "./components/MyNavigation";
import { ValidatedForm } from "./components/ValidatedForm";
import { Home } from './screens/Home';
import { AllCars } from './components/AllCars';
import { MySlider } from './components/MySlider';
import { Filter } from './components/Filter';
import { ViewCar } from './components/ViewCar'; 


function App() {
  return (  
    <div>
      {/* <MyNavigation /> */}
      <Routes>
            <Route path='/' element={<Home/>}>
              <Route path="home" element={<MySlider />} />
              <Route path="login" element={<ValidatedForm />} />
              <Route path="viewCars" element={<AllCars />} />
              <Route path="filter" element={<Filter />} />
            </Route>
              <Route path=":id" element={<ViewCar />} />
      </Routes>
    </div>
  );
}

export default App;
