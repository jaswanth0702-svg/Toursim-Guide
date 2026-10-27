import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

function Signup() {
const navigate = useNavigate();

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const [error, setError] = useState("");

const handleSignup = (e) => {
e.preventDefault();
setError("");

if (password.length < 6) {
  setError("Password must be at least 6 characters long.");
  return;
}

if (password !== confirmPassword) {
  setError("Passwords do not match.");
  return;
}

const users = JSON.parse(
  localStorage.getItem("tripnestUsers") || "[]"
);

const normalizedEmail = email.trim().toLowerCase();

const existingUser = users.find(
  (user) => user.email === normalizedEmail
);

if (existingUser) {
  setError("This email is already registered. Please log in.");
  return;
}

users.push({
  name: name.trim(),
  email: normalizedEmail,
  password,
});

localStorage.setItem("tripnestUsers", JSON.stringify(users));

alert("Account created successfully! Please log in.");
navigate("/login");

};

return (
<div className="auth-container">
<div className="auth-image">
<div className="auth-image-content">
<h1>Your Next Adventure Starts Here</h1>
<p>
Join TripNest to explore amazing places, discover local
cuisines, and plan your dream vacation.
</p>
</div>
</div>

  <div className="auth-form-section">
    <form className="auth-form" onSubmit={handleSignup}>
      <Link to="/" className="auth-logo">
        ✈ TripNest
      </Link>

      <h2>Create an Account</h2>
      <p className="auth-description">
        Sign up and start exploring.
      </p>

      <label htmlFor="signup-name">Full Name</label>
      <input
        id="signup-name"
        type="text"
        placeholder="Enter your full name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label htmlFor="signup-email">Email Address</label>
      <input
        id="signup-email"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label htmlFor="signup-password">Password</label>
      <input
        id="signup-password"
        type="password"
        placeholder="Create a password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        minLength={6}
        required
      />

      <label htmlFor="confirm-password">Confirm Password</label>
      <input
        id="confirm-password"
        type="password"
        placeholder="Confirm your password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        minLength={6}
        required
      />

      {error && <p className="auth-error">{error}</p>}

      <button type="submit" className="auth-submit">
        Create Account
      </button>

      <p className="auth-switch">
        Already have an account?{" "}
        <Link to="/login">Login</Link>
      </p>

      <Link to="/" className="auth-back">
        Back to Home
      </Link>
    </form>
  </div>
</div>

);
}

export default Signup;