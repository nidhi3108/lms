import './App.css';
import CourseDetail from './components/CourseDetail/CourseDetail';
import Header from "./components/Header";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Login from './components/User/Login';
import Register from './components/User/Register';
import UserDashboard from './components/User/UserDashboard';


function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route element={<Home/>} path="/home"/>
      <Route element={<CourseDetail/>} path="/coursedetail"/>
      <Route element={<Login/>} path="/login"/>
      <Route element={<Register/>} path="/register"/>
      <Route element={<UserDashboard/>} path="/userdashboard"/>
      
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;