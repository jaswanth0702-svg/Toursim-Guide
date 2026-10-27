import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import DestinationDetails from "./pages/DestinationDetails";
import Attractions from "./pages/Attractions";
import Packages from "./pages/Packages";
import Hotels from "./pages/Hotels";
import FoodGuide from "./pages/FoodGuide";
import TripPlanner from "./pages/TripPlanner";
import Booking from "./pages/Booking";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route
            path="/destinations/:id"
            element={<DestinationDetails />}
          />
          <Route path="/attractions" element={<Attractions />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/food-guide" element={<FoodGuide />} />
          <Route path="/trip-planner" element={<TripPlanner />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route
            path="*"
            element={
              <div className="container py-5 text-center">
                <h1>404 - Page Not Found</h1>
                <p>The page you're looking for doesn't exist.</p>
              </div>
            }
          />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;