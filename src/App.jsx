
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import UploadFabric from './pages/UploadFabric';
import Designs from './pages/Designs';
import Customize from './pages/Customize';

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/upload-fabric"
          element={<UploadFabric />}
        />

        <Route
          path="/designs"
          element={<Designs />}
        />

        <Route
          path="/customize"
          element={<Customize />}
        />

        <Route path="*" element={<Home />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
