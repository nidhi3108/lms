import './App.css';
import Header from "./components/Header";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes,Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route element={<Home/>} path="/home"/>
      
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;