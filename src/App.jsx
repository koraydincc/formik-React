import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;
