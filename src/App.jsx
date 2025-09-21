import { Navigate, Route, Routes } from "react-router-dom";
import NavbarWithSolidBackground from "./components/NavbarWithSolidBackground";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";
import Saved from "./pages/Saved";
import "./App.css";


function App() {
  return (
    <>
      <NavbarWithSolidBackground />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Navigate to="/explore" replace />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
