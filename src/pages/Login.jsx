import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

function Login() {
const navigate = useNavigate();

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");

const handleLogin = (e) => {
e.preventDefault();
setError("");

const users = JSON.parse(
  localStorage.getItem("tripnestUsers") || "[]"
);

const user = users.find(
  (item) =>
    item.email === email.trim().toLowerCase() &&
    item.password === password
);

if (!user) {
  setError("Invalid email or password. Please sign up first if you don't have an account.");
  return;
}

localStorage.setItem(
  "tripnestCurrentUser",
  JSON.stringify({
    name: user.name,
    email: user.email,
  })
);

navigate("/");

};

return (
<div className="auth-container">
<div className="auth-image">
<div className="auth-image-content">
<h1>Explore the World with TripNest</h1>
<p>
Discover beautiful destinations, delicious food, and
unforgettable travel experiences.
</p>
</div>
</div>

  <div className="auth-form-section">
    <form className="auth-form" onSubmit={handleLogin}>
      <Link to="/" className="auth-logo">
        ✈ TripNest
      </Link>

      <h2>Welcome Back!</h2>
      <p className="auth-description">
        Log in to continue your journey.
      </p>

      <label htmlFor="login-email">Email Address</label>
      <input
        id="login-email"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label htmlFor="login-password">Password</label>
      <input
        id="login-password"
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      {error && <p className="auth-error">{error}</p>}

      <button type="submit" className="auth-submit">
        Login
      </button>

      <p className="auth-switch">
        Don't have an account?{" "}
        <Link to="/signup">Create Account</Link>
      </p>

      <Link to="/" className="auth-back">
        Back to Home
      </Link>
    </form>
  </div>
</div>

);
}

export default Login;