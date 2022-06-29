import { Navigation } from './components/Navigation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Lyrics } from './components/Lyrics';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation/>
        <div>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/lyrics/track/:id' element={<Lyrics/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
