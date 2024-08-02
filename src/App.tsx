import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage/landingPage";
import Root from "./pages/Root/Root";
import DoctorLandingPage from "./pages/DoctorLandingPage/DoctorLandingPage";
import AccountsPage from "./pages/AccountsPage/AccountsPage";
import AppointmentPage from "./pages/AppointmentPage/AppointmentPage";
// import DashboardPage from "./pages/DashBoardPage/DashBoardPage";
import DiagnosisPage from "./pages/DiagnosisPage/DiagnosisPage";
import MedicalStorePage from "./pages/MedicalStorePage/MedicalStorePage";
import PatientPage from "./pages/PatientsPage/PatientsPage";
import PrescriptionPage from "./pages/PrescriptionPage/PrescriptionPage";
import ReportPage from "./pages/ReportsPage/ReportsPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "/doctors",
        element: <DoctorLandingPage />,
      },
      {
        path: "/accounts",
        element: <AccountsPage />,
      },
      {
        path: "/appointments",
        element: <AppointmentPage />,
      },
      {
        path: "/dashboard",
        element: <LandingPage />,
      },
      {
        path: "/diagnosis",
        element: <DiagnosisPage />,
      },
      {
        path: "/medical-store",
        element: <MedicalStorePage />,
      },
      {
        path: "/patients",
        element: <PatientPage />,
      },
      {
        path: "/prescriptions",
        element: <PrescriptionPage />,
      },
      {
        path: "/reports",
        element: <ReportPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
