import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./component/home";
import AddProduct, {
  action as newsProductAction,
} from "./component/addProduct";
import RootLayout from "./pages/Root";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },

      {
        path: "addProduct",
        element: <AddProduct />,
        action: newsProductAction,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
