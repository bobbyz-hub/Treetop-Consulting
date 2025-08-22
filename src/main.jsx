import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import JobSeekerAuth from "./pages/JobSeekerAuth";
import EmployerAuth from "./pages/EmployerAuth";
import JobSeekerProfile from "./pages/JobSeekerProfile";
import EmployerProfile from "./pages/EmployerProfile";
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
import JobSeekerDashboard from "./pages/JobSeekerDashboard";
import JobSeekerProfileDashboard from "./pages/JobSeekerProfileDashboard";

// Create a single router with all routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,          // If App is a layout wrapper; else use <Home />
    errorElement: <ErrorPage />, // Catches any errors for this branch
    children: [
      { index: true, element: <Home /> },
      { path: "jobseeker-auth", element: <JobSeekerAuth /> },
      { path: "employer-auth", element: <EmployerAuth /> },
      { path: "jobseeker-profilee", element: <JobSeekerProfile /> },
      { path: "employer-profile", element: <EmployerProfile /> },
      { path: "jobseeker", element: <JobSeekerForm /> },
      { path: "employer", element: <CompanyRequestForm /> },
      { path: "services", element: <ServicesPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "testimonials", element: <Testimonials /> },
      { path: "blogs", element: <Blogs /> },
      { path: "jobSeekerDashboard", element: <JobSeekerDashboard /> },
      { path: "jobseeker-profile", element: <JobSeekerProfileDashboard /> },
      { path: "jobseeker-dashboard", element: <JobSeekerProfileDashboard /> },
      { path: "*", element: <ErrorPage /> }, // Catch all invalid routes
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
