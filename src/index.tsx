import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "modules/App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import Student from "modules/Authentication/Student/Student";
import "sass";
import Admin from "modules/Authentication/Admin";
import StudentChallengeList from "modules/Profile/Student/ChallengeList/StudentChallengeList.ui";
import Contact from "modules/Profile/Student/ContactDetails/Contact.ui";
import Instance from "modules/Challenge/InstanceDetails/Instance.ui";
import Level from "modules/Challenge/Level/Level.ui";
import Server from "modules/Challenge/ServerDetails/Server.ui";
import Start from "modules/Challenge/Start/Start.ui";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([{ path: "*", Component: App }]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
