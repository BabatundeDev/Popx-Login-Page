import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Signin from "./Signin";
import Signup from "./Signup";

function App() {
  return (
    <BrowserRouter basename="/Popx-Login-Page">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
