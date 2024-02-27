import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CardForm from './components/CardForm';
import CardSubmitted from './components/CardSubmitted';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CardForm />} />
        <Route path='/completion' element={<CardSubmitted />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
