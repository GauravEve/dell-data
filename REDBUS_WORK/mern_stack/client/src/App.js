import logo from './logo.svg';
import './App.css';
import {Route, Link, Routes } from 'react-router-dom';
import ShowBookDetails from './components/ShowBookDetails';
import ShowBookList from './components/ShowBookList';
import CreateBook from './components/CreateBook';
import UpdateBookInfo from "./components/UpdateBookInfo";
function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/create-book">Create-book</Link>
          </li>
          <li>
            <Link to="/edit-book">Edit-book</Link>
          </li>
          <li>
            <Link to="/show-book/:id">Show-Book</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route exact path='/' element={<ShowBookList/>}/>
        <Route exact path='/create-book' element={<CreateBook/>}/>
        <Route exact path='/edit-book' element={<UpdateBookInfo/>}/>
        <Route exact path='/show-book/:id' element={<ShowBookDetails/>}/>

      </Routes>
    </div>
  );
}

export default App;
