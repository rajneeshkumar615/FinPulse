import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [expiredNotice, setExpiredNotice] = useState("");

  const dashboardUrl =
    process.env.REACT_APP_DASHBOARD_URL || "http://localhost:3001";

  const redirectToDashboard = (token) => {
    setError("");
    console.log("Redirecting to dashboard with token:", token);
    window.location.replace(`${dashboardUrl}/?token=${encodeURIComponent(token)}`);
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("expired") === "1") {
      setExpiredNotice("Your session expired. Please login again.");
      const clean = window.location.origin + window.location.pathname;
      window.history.replaceState({}, "", clean);
    }
  }, []);

  const login = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:3002/login", {
        email,
        password,
      });

      if (res.data?.token) {
        localStorage.setItem("token", res.data.token);
        redirectToDashboard(res.data.token);
      } else {
        // If backend indicates user not found, send them to signup
        if (res.data?.message === "User not found") {
          window.location.replace("http://localhost:3000/signup");
          return;
        }

        setError(res.data?.message || "Login failed. Please try again.");
      }
    } catch (err) {
      const msg = err.response?.data?.message;
      if (msg === "User not found") {
        window.location.replace("http://localhost:3000/signup");
        return;
      }

      setError(msg || "Login error. Check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Login</h2>
        <form onSubmit={login} className="auth-form">
          {expiredNotice && <div className="auth-error">{expiredNotice}</div>}
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
            {loading ? "Signing in..." : "Login"}
          </button>
        </form>

        <div className="auth-footer">
          New here? <Link to="/signup">Create an account</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;