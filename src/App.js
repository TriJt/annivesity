
import './App.css';
import Home from './Page/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Gallery from './Page/Gallery/Gallery';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/gallery" element={<Gallery />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
