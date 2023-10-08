import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./component/home";
import Products from "./component/products";
import Cart from "./component/cart";
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
        path: "products",
        element: <Products />,
      },

      {
        path: "addProduct",
        element: <AddProduct />,
        action: newsProductAction,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
