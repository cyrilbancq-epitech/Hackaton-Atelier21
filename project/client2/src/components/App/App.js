import './App.scss';

// IMPORT COMPONENTS
import Home from '../Home/Home';
import AdminLogin from '../AdminLogin/AdminLogin';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/admin-login" element={<AdminLogin />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
