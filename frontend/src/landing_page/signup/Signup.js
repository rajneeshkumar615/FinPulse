import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const dashboardUrl =
    process.env.REACT_APP_DASHBOARD_URL || "http://localhost:3001";

  const redirectToDashboard = (token) => {
    setError("");
    console.log("Redirecting to dashboard with token:", token);
    window.location.replace(`${dashboardUrl}/?token=${encodeURIComponent(token)}`);
  };

  const signup = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:3002/signup", {
        email,
        password,
      });

      if (!res.data?.message) {
        setError("Signup error. Please try again.");
        return;
      }

      const loginRes = await axios.post("http://localhost:3002/login", {
        email,
        password,
      });

      if (loginRes.data?.token) {
        localStorage.setItem("token", loginRes.data.token);
        redirectToDashboard(loginRes.data.token);
      } else {
        setError(
          loginRes.data?.message ||
            "Signup succeeded but login failed. Please login manually."
        );
      }
    } catch (err) {
      setError(err.response?.data?.message || "Signup error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Signup</h2>
        <form onSubmit={signup} className="auth-form">
          <input
            className="auth-input"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            className="auth-input"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <div className="auth-error">{error}</div>}

          <button className="auth-button" type="submit" disabled={loading}>
            {loading ? "Creating account..." : "Signup"}
          </button>
        </form>

        <div className="auth-footer">
          Already have an account? <Link to="/login">Login here</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;