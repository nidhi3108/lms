import './App.css';
import CourseDetail from './components/CourseDetail/CourseDetail';
import Header from "./components/Header";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import UserLogin from './components/User/UserLogin';
import UserRegister from './components/User/UserRegister';
import UserDashboard from './components/User/UserDashboard';
import Mycourses from './components/User/Mycourses';
import RecommendedCourse from './components/User/RecommendedCourse';
import Favouritecourse from './components/User/Favouritecourse';
import ProfileSetting from './components/User/ProfileSetting';
import Logout from './components/User/Logout';
import Changepassword from './components/User/Changepassword';

//Teachers
import TeacherRegister from './components/Teacher/TeacherRegister';
import TeacherLogin from './components/Teacher/TeacherLogin';
import TeacherDashboard from './components/Teacher/TeacherDashboard';
import TeacherSidebar from './components/Teacher/TeacherSidebar';
import TeacherChangepassword from './components/Teacher/TeacherChangepass';
import TeacherAddcourse from './components/Teacher/TeacherAddcourse';
import TeacherLogout from './components/Teacher/TeacherLogout';
import TeacherMyCourse from './components/Teacher/TeacherMyCourse';
import TeacherMyUsers from './components/Teacher/TeacherMyUsers';
import TeacherProfileSetting from './components/Teacher/TeacherProfileSetting';
import TeacherDetail from './components/Teacher/TeacherDetail';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route element={<Home/>} path="/home"/>
      <Route element={<CourseDetail/>} path="/detail/:course_id"/>
      <Route element={<UserLogin/>} path="/user-login"/>
      <Route element={<UserRegister/>} path="/user-register"/>
      <Route element={<UserDashboard/>} path="/user-dashboard"/>
      <Route element={<Mycourses/>} path="/user-mycourses"/>
      <Route element={<RecommendedCourse/>} path="/user-recomcourse"/>
      <Route element={<Favouritecourse/>} path="/user-favcourse"/>
      <Route element={<ProfileSetting/>} path="/user-profilesetting"/>
      <Route element={<Changepassword/>} path="/user-changepass"/>
      <Route element={<Logout/>} path="/user-logout"/>
      {/* //Teachers */}
      <Route element={<TeacherRegister/>} path="/teacher-register"/>
      <Route element={<TeacherLogin/>} path="/teacher-login"/>
      <Route element={<TeacherDashboard/>} path="/teacher-dashboard"/>
      <Route element={<TeacherSidebar/>} path="/teacher-sidebar"/>
      <Route element={<TeacherChangepassword/>} path="/teacher-changepass"/>
      <Route element={<TeacherAddcourse/>} path="/teacher-addcourse"/>
      <Route element={<TeacherLogout/>} path="/teacher-logout"/>
      <Route element={<TeacherMyCourse/>} path="/teacher-mycourses"/>
      <Route element={<TeacherMyUsers/>} path="teacher-myusers"/>
      <Route element={<TeacherProfileSetting/>} path="/teacher-profilesetting"/>
      <Route element={<TeacherDetail/>} path="/teacher-detail/:teacher_id"/>
      
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;