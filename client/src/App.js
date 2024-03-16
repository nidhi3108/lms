import './App.css';
import CourseDetail from './components/CourseDetail/CourseDetail';
import Header from "./components/Header";
import AboutUs from "./components/Home/AboutUs";
import {BrowserRouter, Routes, Route} from "react-router-dom";

//users
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
import TeacherAddChapter from './components/Teacher/TeacherAddChapter';
import TeacherResetPassword from './components/Teacher/TeacherResetPassword';


//commaon pages List pages
import AllLatestcourses from './components/Commonpages/AllLatestcourses';
import AllLatestPopularcourses from './components/Commonpages/AllLatestPopularcourses';
import AllLatestTeacher from './components/Commonpages/AllLatestTeacher';
import Allchapter from './components/Teacher/Allchapter';
import Authorize from './components/Commonpages/Authorize';
import UserAuthorization from './components/User/userAuthorization';
import Home from './components/Home/Home';
import {useState} from "react";


function App() {
  const [renderHeader, setRenderHeader] = useState(false);


  return (
    <BrowserRouter>
      <Header renderHeader={renderHeader} setRenderHeader={setRenderHeader}/>
      <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<AboutUs/>} path="/about-us"/>
        <Route element={<CourseDetail/>} path="coursedetail/:course_id"/>
        <Route element={<UserLogin setRenderHeader={setRenderHeader}/>} path="/user-login"/>
        <Route element={<UserRegister/>} path="/user-register"/>
        <Route element={<UserAuthorization><UserDashboard/></UserAuthorization>} path="/user-dashboard"/>
        <Route element={<Mycourses/>} path="/user-mycourses"/>
        <Route element={<RecommendedCourse/>} path="/user-recomcourse"/>
        <Route element={<Favouritecourse/>} path="/user-favcourse"/>
        <Route element={<ProfileSetting/>} path="/user-profilesetting"/>
        <Route element={<Changepassword/>} path="/user-changepass"/>
        <Route element={<Logout/>} path="/user-logout"/>
        {/* //Teachers */}
        <Route element={<TeacherRegister/>} path="/teacher-register"/>
        <Route element={<TeacherLogin setRenderHeader={setRenderHeader}/>} path="/teacher-login"/>
        <Route element={<Authorize><TeacherDashboard/></Authorize>} path="/teacher-dashboard"/>
        <Route element={<TeacherSidebar/>} path="/teacher-sidebar"/>
        <Route element={<TeacherChangepassword/>} path="/teacher-changepass"/>
        <Route element={<TeacherAddcourse/>} path="/teacher-addcourse"/>
        <Route element={<TeacherLogout/>} path="/teacher-logout"/>
        <Route element={<TeacherMyCourse/>} path="/teacher-mycourses/:id"/>
        <Route element={<TeacherMyUsers/>} path="teacher-myusers"/>
        <Route element={<TeacherProfileSetting/>} path="/teacher-profilesetting"/>
        <Route element={<TeacherResetPassword/>} path="/teacher-resetpassword"/>
        <Route element={<TeacherDetail/>} path="/teacher-detail/:teacher_id"/>
        <Route element={<TeacherAddChapter/>} path="/teacher-addchapter"/>

        {/* List page */}
        <Route element={<AllLatestcourses/>} path="/all-latest-courses"/>
        <Route element={<AllLatestPopularcourses/>} path="/all-latest-popular-courses"/>
        <Route element={<AllLatestTeacher/>} path="/all-latest-teacher"/>
        <Route element={<Allchapter/>} path="/all-chapter/:id"/>


      </Routes>

    </BrowserRouter>
  );
}

export default App;
