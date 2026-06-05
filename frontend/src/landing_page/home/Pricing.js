import React from "react";

function Pricing() {
  return (
    <div className="container mt-5">
      <div className="row">
        {/* Left Section */}
        <div className="col-4">
          <h1 className="mb-3 fs-2">Unbeatable pricing</h1>

          <p className="text-muted">
            We pioneered the concept of discount broking and price
            transparency in India. Flat fees and no hidden charges.
          </p>

          <a href="#" style={{ textDecoration: "none" }}>
            See pricing{" "}
            <i
              className="fa fa-long-arrow-right"
              aria-hidden="true"
            ></i>
          </a>
        </div>

        {/* Space */}
        <div className="col-2"></div>

        {/* Right Section */}
        <div className="col-6">
          <div className="row text-center">
            <div className="col p-3 border">
              <h1 className="mb-3">₹0</h1>
              <p className="text-muted">
                Free equity delivery and
                <br />
                direct mutual funds
              </p>
            </div>

            <div className="col p-3 border">
              <h1 className="mb-3">₹20</h1>
              <p className="text-muted">
                Intraday and F&O
                <br />
                trades
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;