import logo from './logo.svg';
import './App.css';
import Welcome from './Pages/Welcome';
import { Routes, Route } from 'react-router-dom';
import Menu from './Pages/Menu';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path='/menu' element={<Menu />} />
      </Routes>
    </div>
  );
}

export default App;
