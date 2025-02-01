import Blog from "./pages/Blog";
import Home from "./pages/Home";
// import Login from "./pages/Login";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    // {
    //   path: "/login",
    //   element: <Login />,
    // },
    {
      path: "/blog",
      element: <Blog />,
    },
  ]);

  return (
    <>
      <nav className="container">
        <h2>Blog/Platform</h2>
      </nav>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
