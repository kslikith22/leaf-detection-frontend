import React, { useState } from "react";
import UploadImage from "./UploadImage";

export default function Main() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false); // Add the closing parenthesis here
  }, 2000); // 1500ms = 1.5 seconds

  return (
    <>
      {loading && (
        <div style={{
          backgroundColor: "lightblue",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "3em",
          color: "white",
          animation: "$spin 1.5s linear infinite"
        }}>
          Loading...
          <style jsx>{`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      )}
      {!loading && <UploadImage />}
    </>
  );
}
