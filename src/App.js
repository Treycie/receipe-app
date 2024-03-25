import Receipes from "./pages/receipes";
import Receipe from "./pages/receipe";
import AddRecipe from "./pages/add-recipe";
import { RouterProvider, createBrowserRouter } from "react-router-dom";



const router = createBrowserRouter([
  { path: "/", element: <Receipes /> },
  { path: "/receipes", element: <Receipes /> },
  { path: "/receipes/:id", element: <Receipe /> },
  {path:   "/add-recipe",element:<AddRecipe/>   },
]);

function App() {
  return ( <RouterProvider router={router} />
   
  );
}

export default App;
