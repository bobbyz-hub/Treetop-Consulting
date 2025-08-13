import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import JobSeekerForm from "./pages/JobSeekerForm";
import CompanyRequestForm from "./pages/CompanyRequestForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Layout wrapper
    children: [
      { index: true, element: <Home /> },
      { path: "jobseeker", element: <JobSeekerForm /> },
      { path: "employer", element: <CompanyRequestForm /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);