import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Events from "./pages/events/Events.jsx";
import Home from "./pages/home/Home.jsx";
import NotFound from "./components/errors/notFound/NotFound.jsx";
import Event from "./pages/event/Event.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/events/",
    element: <Events />,
  },
  {
    path: "/events/:categoryId",
    element: <Events />,
  },
  {
    path: "/events/:categoryId/:subCategoryId",
    element: <Events />,
  },
  {
    path: "/event/:eventId",
    element: <Event />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
