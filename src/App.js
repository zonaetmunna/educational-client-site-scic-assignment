import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home/Home/Home';
import DetailService from './Components/Pages/Home/DetailsService/DetailService';
import Login from './Components/Login/Login/Login';
import Register from './Components/Login/Regiseter/Register';
import AuthProvider from './AuthProvider/AuthProvider';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/service/:id" element={<DetailService></DetailService>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/register" element={<Register></Register>}></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>


    </div>
  );
}

export default App;
