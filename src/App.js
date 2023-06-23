import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SingleBook from './components/SingleBook';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/login/register" element={<Register/>}/>
        <Route path="/book/:id" element={<SingleBook/>} />
        <Route path="*" element={<h1>Page Does not Exist</h1>}/>
      </Routes>
    </div>
  );
}

export default App;
