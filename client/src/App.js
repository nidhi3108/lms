import './App.css';
import CourseDetail from './components/CourseDetail/CourseDetail';
import Header from "./components/Header";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Login from './components/User/Login';
import Register from './components/User/Register';
import UserDashboard from './components/User/UserDashboard';
import Mycourses from './components/User/Mycourses';
import RecommendedCourse from './components/User/RecommendedCourse';
import Favouritecourse from './components/User/Favouritecourse';
import ProfileSetting from './components/User/ProfileSetting';
import Logout from './components/User/Logout';
import Changepassword from './components/User/Changepassword';


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
      <Route element={<Mycourses/>} path="/mycourses"/>
      <Route element={<RecommendedCourse/>} path="/recomcourse"/>
      <Route element={<Favouritecourse/>} path="/favcourse"/>
      <Route element={<ProfileSetting/>} path="/profilesetting"/>
      <Route element={<Changepassword/>} path="/changepass"/>
      <Route element={<Logout/>} path="/logout"/>
      
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;