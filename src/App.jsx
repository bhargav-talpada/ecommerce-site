import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import UserLogin from "./components/UserLogin";
import AdminLogin from "./components/AdminLogin";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/user" element={<UserLogin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
