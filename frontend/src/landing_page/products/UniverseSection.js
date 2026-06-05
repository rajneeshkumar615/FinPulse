import React from "react";

function UniverseSection() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>

        <p className="text-muted mb-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-lg-4 col-md-6 col-12 p-2">
          <img
            src="media/images/zerodhaFundhouse.png"
            alt="Zerodha Fund House"
            className="img-fluid mx-auto d-block"
            style={{
              height: "40px",
              maxWidth: "140px",
              objectFit: "contain",
            }}
          />
          <p className="text-muted small mt-3" style={{ minHeight: "60px" }}>
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>

        <div className="col-lg-4 col-md-6 col-12 p-2">
          <img
            src="media/images/sensibullLogo.svg"
            alt="Sensibull"
            className="img-fluid mx-auto d-block"
            style={{
              height: "40px",
              maxWidth: "140px",
              objectFit: "contain",
            }}
          />
          <p className="text-muted small mt-3" style={{ minHeight: "60px" }}>
            Options trading platform for retail traders.
          </p>
        </div>

        <div className="col-lg-4 col-md-6 col-12 p-2">
          <img
            src="media/images/streakLogo.png"
            alt="Streak"
            className="img-fluid mx-auto d-block"
            style={{
              height: "40px",
              maxWidth: "140px",
              objectFit: "contain",
            }}
          />
          <p className="text-muted small mt-3" style={{ minHeight: "60px" }}>
            Algo & strategy platform without coding.
          </p>
        </div>

        <div className="col-lg-4 col-md-6 col-12 mt-2 p-2">
          <img
            src="media/images/goldenpiLogo.png"
            alt="GoldenPi"
            className="img-fluid mx-auto d-block"
            style={{
              height: "40px",
              maxWidth: "140px",
              objectFit: "contain",
            }}
          />
          <p className="text-muted small mt-3" style={{ minHeight: "60px" }}>
            Bond investment platform.
          </p>
        </div>

        <div className="col-lg-4 col-md-6 col-12 mt-2 p-2">
          <img
            src="media/images/smallcaseLogo.png"
            alt="Smallcase"
            className="img-fluid mx-auto d-block"
            style={{
              height: "40px",
              maxWidth: "140px",
              objectFit: "contain",
            }}
          />
          <p className="text-muted small mt-3" style={{ minHeight: "60px" }}>
            Thematic investment baskets curated by experts.
          </p>
        </div>

        <div className="col-lg-4 col-md-6 col-12 mt-2 p-2">
          <img
            src="media/images/dittoLogo.png"
            alt="Ditto"
            className="img-fluid mx-auto d-block"
            style={{
              height: "40px",
              maxWidth: "140px",
              objectFit: "contain",
            }}
          />
          <p className="text-muted small mt-3" style={{ minHeight: "60px" }}>
            Insurance advice platform for health and term insurance.
          </p>
        </div>

        <div className="text-center mt-5 mb-5">
          <button className="btn btn-primary px-5 py-2">
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
}

export default UniverseSection;