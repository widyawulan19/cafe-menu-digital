import logo from './logo.svg';
import './App.css';
import Welcome from './Pages/Welcome';
import { Routes, Route } from 'react-router-dom';
import Menu from './Pages/Menu';
import ChoosePage from './Pages/ChoosePage';
import MealsMenu from './Pages/MealsMenu';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/meals' element={<MealsMenu />} />
        <Route path='/choose' element={<ChoosePage />} />
      </Routes>
    </div>
  );
}

export default App;
