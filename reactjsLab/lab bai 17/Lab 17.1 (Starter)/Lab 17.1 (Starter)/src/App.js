import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Quotes from "./components/quotes/quotess/Quotes";
import NewQuote from "./components/quotes/quotess/NewQuote";
import QuoteDetai from "./components/quotes/quotess/QuoteDetails";

const router = createBrowserRouter([
  {
    path: "/quotes",
    element: <Quotes />,
  },
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
