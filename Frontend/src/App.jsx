import AddTask from "./AddTask";
import Dashboard from "./Dashboard";
import DefaultDashboard from "./DefaultDashboard";
import Home from "./Home";
import Login from "./Login";
import Nav from "./Nav";
import NotFound from "./NotFound";
import Signup from "./Signup";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Task from "./Task";
import CatShow from "./CatShow";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <NotFound />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/dashboard",
      element:( 
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
      ),
      children: [
        {
          index:true,
          element:<DefaultDashboard/>
        },
        {
          path: "addtask",
          element: <AddTask />,
        },
        {
          path: "cat/:cat",
          element: <CatShow/>,
        },
        
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
