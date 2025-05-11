import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> */}
        <Route path="/" element={<div>Home Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;
