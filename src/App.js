import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home/Home/Home';
import DetailService from './Components/Pages/Home/DetailsService/DetailService';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/service/:id" element={<DetailService></DetailService>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
