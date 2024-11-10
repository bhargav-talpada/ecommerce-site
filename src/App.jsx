import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import UserLogin from "./components/User/UserLogin";
import AdminLogin from "./components/Admin/AdminLogin";
import AdminHomePage from "./components/Admin/AdminHomePage";
import UserHomePage from "./components/User/UserHomePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/user" element={<UserLogin />} />
          <Route path="/adminhomepage/*" element={<AdminHomePage />} />
          <Route path="/userhomepage" element={<UserHomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
