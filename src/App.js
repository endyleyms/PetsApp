import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './Pages/Home';
import { PetDetail } from './Pages/PetDetail';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/petdetail/:id" element={<PetDetail/>} />
    </Routes>

    </BrowserRouter>
   
  );
}

export default App;
