import Admin from "modules/Authentication/Admin/Admin";
import Student from "modules/Authentication/Student/Student.ui";
import Instance from "modules/Challenge/InstanceDetails/Instance.ui";
import Level from "modules/Challenge/Level/Level.ui";
import Server from "modules/Challenge/ServerDetails/Server.ui";
import Start from "modules/Challenge/Start/Start.ui";
import AdminChallengeList from "modules/Profile/Admin/ChallengeList/AdminChallengeList.ui";
import AdminStudentList from "modules/Profile/Admin/StudentList/AdminStudentList.ui";
import StudentChallengeList from "modules/Profile/Student/ChallengeList/StudentChallengeList.ui";
import Contact from "modules/Profile/Student/ContactDetails/Contact.ui";
import React from "react";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Student />} />
      <Route path="/Student/ChallengeList" element={<StudentChallengeList />} />
      <Route path="/Student/ContactDetails" element={<Contact />} />
      <Route path="/Student/InstanceDetails" element={<Instance />} />
      <Route path="/Student/ServerDetails" element={<Server />} />
      <Route path="/Student/Level" element={<Level />} />
      <Route path="/Student/Start" element={<Start />} />
      <Route path="/Admin/" element={<Admin />} />
      <Route path="/Admin/ChallengeList/*" element={<AdminChallengeList />} />
      <Route path="/Admin/StudentList/*" element={<AdminStudentList />} />
    </Routes>
  );
}

/* const App = () => {
    return (
      <div className="App">
      </div>
    );
  }*/
