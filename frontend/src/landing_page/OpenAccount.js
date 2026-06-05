import React from "react";
import { Link } from "react-router-dom";
function OpenAccount() {
  return (
    <div className="container my-5">
      <div className="row text-center">
        <div className="col">
          <h1 className="mb-3">Open a Zerodha account</h1>

          <p className="text-muted mb-4">
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday
            and F&O trades.
          </p>

          <button
            className="btn btn-primary btn-lg mb-5"
            style={{ width: "20%" }}
          >
            <Link to="/signup" style={{ color: "white", textDecoration: "none" }}>
              Sign up now
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default OpenAccount;