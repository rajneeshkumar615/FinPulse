// import React from "react";

// import Dashboard from "./Dashboard";
// import TopBar from "./TopBar";

// const Home = () => {
//   return (
//     <>
//       <TopBar />
//       <Dashboard />
//     </>
//   );
// };

// export default Home;
import React, { useEffect, useState } from "react";
import api from "../api";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const [ready, setReady] = useState(false);

  const getTokenFromLocation = () => {
    // try search part first: /?token=...
    const searchParams = new URLSearchParams(window.location.search);
    let t = searchParams.get("token");
    if (t) return t;

    // if not found, try hash-based route: /#/?token=...
    if (window.location.hash) {
      const hash = window.location.hash.replace(/^#/, "");
      const hashParams = new URLSearchParams(hash.split("?")[1] || "");
      t = hashParams.get("token");
      if (t) return t;
    }

    return null;
  };

  useEffect(() => {
    const tokenFromUrl = getTokenFromLocation();
    const token = tokenFromUrl || localStorage.getItem("token");

    if (tokenFromUrl) {
      localStorage.setItem("token", tokenFromUrl);
      api.defaults.headers.common["authorization"] = tokenFromUrl;

      // remove token from URL for cleanliness
      const cleanUrl = window.location.origin + window.location.pathname;
      window.history.replaceState({}, "", cleanUrl);
    }

    if (!token) {
      window.location.href = "http://localhost:3000";
      return;
    }

    api.defaults.headers.common["authorization"] = token;

    api
      .get("/verify")
      .then(() => {
        setReady(true);
      })
      .catch((err) => {
        console.error("Token verification failed", err?.response?.data || err);
        localStorage.removeItem("token");
        window.location.href = "http://localhost:3000/login?expired=1";
      });
  }, []);

  if (!ready) {
    return null;
  }

  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;