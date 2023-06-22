import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' />
        <Route path="/login" element={<Login/>}/>
        <Route path="/login/register" element={<Register/>}/>
        
        <Route path="*" element={<h1>Page Does not Exist</h1>}/>
      </Routes>
    </div>
  );
}

export default App;
