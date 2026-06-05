import React from "react";

function Hero() {
  return (
    <div className="container border-bottom">
      <div className="text-center py-5">
        <h1 className="fw-semibold">Zerodha Products</h1>

        <h3 className="text-muted fs-4 mt-3">
          Sleek, modern, and intuitive trading platforms
        </h3>

        <p className="mt-4 mb-5" style={{
    textDecoration: "none",
     fontSize: " 1.6em",
  }}>
          Check out our{" "}
          <a
  href="/"
  style={{
    textDecoration: "none",
    color: "#387ed1",
    fontWeight: "600",
    fontSize: " 1em",
  }}
>
  investment offerings
</a>
          <i
            className="fa fa-long-arrow-right"
            aria-hidden="true"
          ></i>
        </p>
      </div>
    </div>
  );
}

export default Hero;