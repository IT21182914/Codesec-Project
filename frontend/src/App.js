import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./components/HomePage";
import FavoritePage from "./components/FavoritePage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/registration" element={<RegisterPage />}></Route>
          <Route path="/home" element={<HomePage />} />
          <Route path="/favorite" element={<FavoritePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
