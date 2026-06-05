import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container py-3">
      <div className="row align-items-center">
        <div className="col-lg-5 col-12 px-3">
          <h1 className="mb-4">{productName}</h1>

          <p className="text-muted" style={{ lineHeight: "1.8" }}>
            {productDescription}
          </p>

          <div className="mt-4">
            <a href={learnMore || "/"} style={{ textDecoration: "none" }}>
              Learn More <i className="fa fa-long-arrow-right"></i>
            </a>
          </div>
        </div>

        <div className="col-lg-7 col-12 text-center">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
            style={{ width: "75%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default RightSection;