import { Routes, Route } from 'react-router-dom';
import Line from './components/Line';
import Navbar from './components/Navbar';
import Missions from './components/Missions';

function App() {
  return (
    <div className="MainApp">
      <Navbar />
      <Line />
      <Routes>
        <Route path="/missions" element={<Missions />} />
      </Routes>
    </div>
  );
}

export default App;
