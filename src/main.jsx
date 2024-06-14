import React from "react";
import ReactDOM from "react-dom/client";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { Authentification } from "./pages/Authentification.jsx";
import { Homepage } from "./pages/Homepage.jsx";
import { MyOffer } from "./pages/MyOffer.jsx";

export const existApi = true;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Navigate to="/Authentification" replace={true} />,
      },
      {
        path: "/Authentification",
        element: <Authentification />,
      },
      {
        path: "/HomePage",
        element: <Homepage />,
      },
      {
        path: "/myOffer",
        element: <MyOffer />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
