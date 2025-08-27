import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import JobSeekerAuth from "./pages/JobSeekerAuth";
import EmployerAuth from "./pages/EmployerAuth";
import JobSeekerForm from "./pages/JobSeekerForm";
import CompanyRequestForm from "./pages/CompanyRequestForm";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";
import theme from "./theme";
import App from "./App";
import Testimonials from "./pages/Testimonials";
import Blogs from "./pages/Blogs";
import JobSeekerProfileDashboard from "./pages/JobSeekerProfileDashboard";
import EmployerProfileDashboard from "./pages/EmployerProfileDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,          
    errorElement: <ErrorPage />, 
    children: [
      { index: true, element: <Home /> },
      { path: "jobseeker-auth", element: <JobSeekerAuth /> },
      { path: "employer-auth", element: <EmployerAuth /> },

      // ✅ Employer Routes
      { path: "employer-profile", element: <EmployerProfileDashboard /> },
      { path: "employer-dashboard", element: <EmployerProfileDashboard /> },

      // ✅ Jobseeker Routes
      { path: "jobseeker-profile", element: <JobSeekerProfileDashboard /> },
      { path: "jobseeker-dashboard", element: <JobSeekerProfileDashboard /> },

      // ✅ Forms
      { path: "jobseeker", element: <JobSeekerForm /> },
      { path: "employer", element: <CompanyRequestForm /> },

      // ✅ Static Pages
      { path: "services", element: <ServicesPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "testimonials", element: <Testimonials /> },
      { path: "blogs", element: <Blogs /> },

      // ✅ Catch-all
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
