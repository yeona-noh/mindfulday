import "./App.css";
import { HashRouter as Router, Routes,Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Yoga from "./pages/Yoga";
import YogaDetail from "./pages/YogaDetail";
import Meditate from "./pages/Meditate";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MeditateDetail from "./pages/MeditateDetail";
import _Footer from "./components/_Footer";

function App() {
  return (    <Router>
    <div className="container">
      <div className="content">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/yoga" element={<Yoga />} />
        <Route
          path="/yoga/:id"
          element={
            <ProtectedRoute>
              <YogaDetail />
            </ProtectedRoute>
          }
        />
        <Route path="/meditate" element={<Meditate />} />
        <Route
          path="/meditations/:id"
          element={
            <ProtectedRoute>
              <MeditateDetail />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    
    </div>
      <_Footer />
    </div>
</Router>
  );
}

export default App;
