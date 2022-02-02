import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/header";
import Home from "./components/home";
import Post from "./components/post";
import Login from "./components/Login";
//import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/post" element={<Post />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
