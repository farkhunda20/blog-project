import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Layout from "./Layout";
import IndexPage from "./IndexPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
