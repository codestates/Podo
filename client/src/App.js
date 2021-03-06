<<<<<<< HEAD
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MyPage from "./pages/MyPage";
import Create from "./pages/Create";
import Search from "./pages/Search";
import Contents from "./pages/Contents";
import Guide from "./pages/Guide";
import Api from "./api/index";
import LoginCallBack from "./components/public/LoginCallBack";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/mypage/:menu" element={<MyPage />} />
          <Route path="/mypage/:menu/:id" element={<MyPage />} />
          <Route path="/create" element={<Create />} />
          <Route path="/create/:step" element={<Create />} />
          <Route path="/search" element={<Search />} />
          <Route path="/contents" element={<Contents />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/api" element={<Api />} />
          <Route path="/logincallback" element={<LoginCallBack />} />
        </Routes>
      </BrowserRouter>
    </>
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
>>>>>>> main
  );
}

export default App;
