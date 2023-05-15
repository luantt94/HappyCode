import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Quotes from "./components/quotes/quotess/Quotes";
import NewQuote from "./components/quotes/quotess/NewQuote";
import QuoteDetai from "./components/quotes/quotess/QuoteDetails";
import { Navigate } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/quotes",
    element: <Quotes />,
  },
  { path: "/", element: <Navigate to="/quotes" /> },
  {
    path: "/new-quotes",
    element: <NewQuote />,
  },
  {
    path: "/quoteId",
    element: <QuoteDetai />,
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
