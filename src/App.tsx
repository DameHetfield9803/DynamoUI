import './App.css'
import Navbar from './Navbar';
import Index from './index';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Index />} />
      </Routes>
    </Router>
  );
}