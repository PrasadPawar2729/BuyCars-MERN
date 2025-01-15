import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"
import Login from "./Pages/Login"; // Example page component
import Signup from "./Pages/Signup"; // Example page component
import AddCar from "./Pages/AddCar";
import CarList from "./Pages/CarList";
import Navbar from "./Components/Navbar";

function App() {
    return (
        <Router>
          <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/dealer/add-car" element={<AddCar />} />
                <Route path="/dealer/cars" element={<CarList />} />
                <Route path="*" element={<h1>404: Page Not Found</h1>} />
            </Routes>
        </Router>
    );
}

export default App;

