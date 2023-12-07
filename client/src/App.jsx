import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./Components/Header";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import PrivateRoute from "./Components/PrivateRoute";
import CreatePost from "./pages/CreatePost";
import PostPage from "./pages/PostPage";
// import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/post/:id" element={<PostPage/>}></Route>

        
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<ProfilePage />}></Route>
          <Route path="/create" element={<CreatePost/>}></Route>
        </Route>


      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;
