import { Routes, Route } from 'react-router-dom';
import { Nav } from './components/Nav';
import { ScrollManager } from './components/ScrollManager';
import { Home } from './pages/Home';
import { PastEvents } from './pages/PastEvents';

export default function App() {
  return (
    <>
      <ScrollManager />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/past-events" element={<PastEvents />} />
      </Routes>
    </>
  );
}
