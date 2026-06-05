import React, { useState } from "react";

function SupportPage() {
  const supportData = [
    {
      title: "Account Opening",
      icon: "fa fa-plus-circle",
      items: [
        "Resident individual",
        "Minor",
        "Non Resident Indian (NRI)",
        "Company, Partnership, HUF and LLP",
        "Glossary",
      ],
    },
    {
      title: "Your Zerodha Account",
      icon: "fa fa-user-circle-o",
      items: [
        "Your Profile",
        "Account modification",
        "Client Master Report (CMR) and Depository Participant (DP)",
        "Nomination",
        "Transfer and conversion of securities",
      ],
    },
    {
      title: "Kite",
      icon: "fa fa-paper-plane-o",
      items: [
        "IPO",
        "Trading FAQs",
        "Margin Trading Facility (MTF) and Margins",
        "Charts and orders",
        "Alerts and Nudges",
        "General",
      ],
    },
    {
      title: "Funds",
      icon: "fa fa-inr",
      items: ["Add money", "Withdraw money", "Add bank accounts", "eMandates"],
    },
    {
      title: "Console",
      icon: "fa fa-desktop",
      items: [
        "Portfolio",
        "Corporate actions",
        "Funds statement",
        "Reports",
        "Profile",
        "Segments",
      ],
    },
    {
      title: "Coin",
      icon: "fa fa-circle-o",
      items: [
        "Mutual funds",
        "National Pension Scheme (NPS)",
        "Fixed Deposit (FD)",
        "Features on Coin",
        "Payments and Orders",
        "General",
      ],
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div style={{ background: "#f8f8f8", minHeight: "100vh" }}>
      <div className="container py-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 style={{ color: "#333", fontWeight: "600" }}>
            Support Portal
          </h1>

          <button className="btn btn-primary px-4 py-2">My tickets</button>
        </div>

        <div
          className="bg-white border rounded d-flex align-items-center px-4 mb-5"
          style={{ height: "75px" }}
        >
          <i className="fa fa-search me-4" style={{ fontSize: "22px" }}></i>

          <span style={{ color: "#999", fontSize: "20px" }}>
            Eg: How do I open my account, How do i activate F&O...
          </span>
        </div>

        <div className="row mt-5">
          <div className="col-lg-8 col-12">
            {supportData.map((topic, index) => (
              <div key={index} className="mb-4">
                <div
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="d-flex align-items-center justify-content-between bg-white border"
                  style={{
                    minHeight: "78px",
                    cursor: "pointer",
                  }}
                >
                  <div className="d-flex align-items-center">
                    <div
                      className="d-flex align-items-center justify-content-center"
                      style={{
                        width: "75px",
                        height: "78px",
                        background: "#f4f8fb",
                      }}
                    >
                      <i
                        className={topic.icon}
                        style={{
                          color: "#387ed1",
                          fontSize: "24px",
                        }}
                      ></i>
                    </div>

                    <h4 className="mb-0 ms-3" style={{ fontSize: "22px" }}>
                      {topic.title}
                    </h4>
                  </div>

                  <i
                    className={
                      openIndex === index
                        ? "fa fa-chevron-up me-4"
                        : "fa fa-chevron-down me-4"
                    }
                    style={{ color: "#387ed1" }}
                  ></i>
                </div>

                {openIndex === index && (
                  <div
                    className="bg-white border border-top-0 px-5 py-4"
                    style={{ marginLeft: "75px" }}
                  >
                    <ul
                      className="mb-0"
                      style={{
                        lineHeight: "2.2",
                        fontSize: "16px",
                      }}
                    >
                      {topic.items.map((item, i) => (
                        <li key={i}>
                          <a
                            href="/"
                            style={{
                              color: "#387ed1",
                              textDecoration: "none",
                            }}
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="col-lg-4 col-12">
            <div
              className="p-4 mb-4"
              style={{
                background: "#fff3e3",
                borderLeft: "8px solid #ff8a00",
              }}
            >
              <ul className="mb-0" style={{ lineHeight: "2" }}>
                <li>
                  <a href="/" style={{ color: "#387ed1" }}>
                    Scheduled maintenance for Coin
                  </a>
                </li>
                <li>
                  <a href="/" style={{ color: "#387ed1" }}>
                    Additional exposure margin on securities under MWPL
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-white border">
              <div className="p-3" style={{ background: "#f5f5f5" }}>
                <h4 className="mb-0 fs-5 fw-semibold">Quick links</h4>
              </div>

              {[
                "Track account opening",
                "Track segment activation",
                "Intraday margins",
                "Kite user manual",
              ].map((link, index) => (
                <div className="p-3 border-top" key={index}>
                  <a
                    href="/"
                    style={{
                      color: "#387ed1",
                      textDecoration: "none",
                      fontSize: "18px",
                    }}
                  >
                    {index + 1}. {link}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupportPage;