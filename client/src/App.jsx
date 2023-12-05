import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./Components/Header";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import PrivateRoute from "./Components/PrivateRoute";
import CreatePost from "./pages/CreatePost";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>

        
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<ProfilePage />}></Route>
          <Route path="/create" element={<CreatePost/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
