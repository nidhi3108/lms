import './App.css';
import CourseDetail from './components/CourseDetail/CourseDetail';
import Header from "./components/Header";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Login from './components/User/Login';
import Register from './components/User/Register';


function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route element={<Home/>} path="/home"/>
      <Route element={<CourseDetail/>} path="/detail/:course_id"/>
      <Route element={<Login/>} path="/login"/>
      <Route element={<Register/>} path="/register"/>
      
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;