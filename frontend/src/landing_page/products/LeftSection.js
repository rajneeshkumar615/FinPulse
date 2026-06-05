import React from "react";

function LeftSection({
  imageURL,
  imageWidth = "75%",
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container py-5 my-4">
      <div className="row align-items-center">
        {/* Image */}
        <div className="col-lg-7 col-12 text-center py-4 px-4">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
            style={{
              width: imageWidth,
            }}
          />
        </div>

        {/* Content */}
        <div className="col-lg-5 col-12 px-4">
          <h1 className="mb-4 fw-semibold">{productName}</h1>

          <p
            className="text-muted"
            style={{
              lineHeight: "1.9",
              fontSize: "1.05rem",
            }}
          >
            {productDescription}
          </p>

          <div className="mt-4">
            <a
              href={tryDemo}
              style={{
                textDecoration: "none",
                color: "#387ed1",
                fontWeight: "500",
              }}
            >
              Try Demo <i className="fa fa-long-arrow-right"></i>
            </a>

            <a
              href={learnMore}
              className="ms-5"
              style={{
                textDecoration: "none",
                color: "#387ed1",
                fontWeight: "500",
              }}
            >
              Learn More <i className="fa fa-long-arrow-right"></i>
            </a>
          </div>

          <div className="mt-4 pt-2">
            <a href={googlePlay} className="me-3">
              <img
                src="/media/images/googlePlayBadge.svg"
                alt="Google Play"
                style={{ height: "42px" }}
              />
            </a>

            <a href={appStore}>
              <img
                src="/media/images/appStoreBadge.svg"
                alt="App Store"
                style={{ height: "42px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;