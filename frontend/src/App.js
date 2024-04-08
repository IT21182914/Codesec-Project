import { HashRouter as Router, Routes, Route } from "react-router-dom";
// import { useSelector } from "react-redux";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./components/HomePage";
import FavoritePage from "./components/FavoritePage";

function App() {
  // const isLoggedIn = useSelector((state) => state.isLoggedIn);
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/registration" element={<RegisterPage />}></Route>

          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/favorite" element={<FavoritePage />}></Route>

          {/* {isLoggedIn && <Route path="/home" element={<HomePage />} />}
          {isLoggedIn && <Route path="/favorite" element={<FavoritePage />} />} */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
