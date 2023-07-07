import "./App.css";
import { Upcoming } from "./routes/Upcoming";
import { Home } from "./routes/Home";
import { Shows } from "./routes/Shows";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/shows",
    element: <Shows />,
  },
  {
    path: "/upcoming",
    element: <Upcoming />,
  },
]);

function App() {
  return (
    <div className="mt-4 mx-auto h-75 w-75">
      <RouterProvider router={router} />
    </div>
  );
}

export { App };
