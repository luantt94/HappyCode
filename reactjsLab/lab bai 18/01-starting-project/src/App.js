import { RouterProvider, createBrowserRouter } from "react-router-dom";

import GreatQuotes from "./pages/greatQuotes";
import AddQuotes from "./pages/addQuote";
import RootLayout from "./pages/Root";
import AllQuotes from "./pages/allQuotes";
import NotFound from "./pages/notFound";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <GreatQuotes /> },
      { path: "/add", element: <AddQuotes /> },
      { path: "/all", element: <AllQuotes /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
