import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MainProvider from "./contexts/context";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import About from "./components/home/About";
import Properties from "./pages/Properties";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/properties",
        element: <Properties />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MainProvider>
      <RouterProvider router={router} />
    </MainProvider>
  </StrictMode>
);
