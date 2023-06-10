import Home from "./components/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Users from "./components/users";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="users" element={<Users />} />
      </Routes>
    </Router>
  );
}

export default App;
