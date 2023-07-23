import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import "./index.css";
import "./App.css";
import Index from "./routes/index.js";
import Apropos from "./routes/apropos.js";
import NotFound from "./routes/pageError.js";
import Logement from "./routes/Logement.js"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    children: [
      {
        path: "apropos",
        element: <Apropos />,
      },
      {
        path: "logement/:id",
        element: <Logement />,
      },
      {
        path: "logement",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);