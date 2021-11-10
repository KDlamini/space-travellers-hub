import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Line from './components/Line';
import Rockets from './components/Rockets';

function App() {
  return (
    <>
      <Navbar />
      <Line />
      <Routes>
        <Route path="/rockets" element={<Rockets />} />
      </Routes>
    </>
  );
}

export default App;
