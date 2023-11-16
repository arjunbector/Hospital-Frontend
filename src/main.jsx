import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import ErrorPage from "../Pages/ErrorPage.jsx";
import Doctor from "../Pages/Doctor.jsx";
import Patient from "../Pages/Patient.jsx";
import Nurse from "../Pages/Nurse.jsx";
import CreateDoctor from "../Pages/CreateDoctor.jsx";
import CreatePatient from "../Pages/createPatient.jsx";
import CreateNurse from "../Pages/createNurse.jsx";
import GetDoctor from "../Pages/getDoctor.jsx";
import GetPatient from "../Pages/GetPatient.jsx";
import GetNurse from "../Pages/GetNurse.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/doctor",
    element: <Doctor />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/patient",
    element: <Patient />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/nurse",
    element: <Nurse />,
    errorElement: <ErrorPage />,
  },
  {
    path: "createDoctor",
    element: <CreateDoctor />,
    errorElement: <ErrorPage />,
  },
  {
    path: "createPatient",
    element: <CreatePatient />,
    errorElement: <ErrorPage />,
  },
  {
    path: "createNurse",
    element: <CreateNurse/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "getDoctor",
    element: <GetDoctor/> ,
    errorElement: <ErrorPage />,
  },
  {
    path: "getPatient",
    element: <GetPatient/> ,
    errorElement: <ErrorPage />,
  },
  {
    path: "getNurse",
    element: <GetNurse/> ,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
