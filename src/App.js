import Receipes from "./pages/receipes";
import Receipe from "./pages/receipe";
import { RouterProvider, createBrowserRouter } from "react-router-dom";



const router = createBrowserRouter([
  { path: "/", element: <Receipes /> },
  { path: "/receipes", element: <Receipes /> },
  { path: "/receipes/:id", element: <Receipe /> }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
