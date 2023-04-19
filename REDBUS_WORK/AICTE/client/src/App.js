import logo from './logo.svg';
import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Student from '../src/components/Student'
import Home from './components/Home';
import Proctor from './components/Proctor';
import NGO from './components/NGO';
function App() {
  return (
    
    <div className="App">
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route  path='/student' element={<Student/>}/>
      <Route  path='/proctor' element={<Proctor/>}/>
      <Route  path='/ngo' element={<NGO/>}/>
    </Routes>
    

    </div>
  );
}

export default App;
