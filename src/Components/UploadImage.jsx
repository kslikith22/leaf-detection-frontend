import React, { useState, useEffect } from "react";

import axios from "axios";
import { Link } from "react-router-dom";


const styles = {
  mobile: {
    "@media screen and (max-width: 768px)": {
      nav: {
        flexDirection: "column",
        alignItems: "center",
      },

      ".brand-logo": {
        fontSize: "2rem",
      },

      ".nav-links": {
        width: "100%",
        justifyContent: "space-around",
      },

      "form": {
        width: "80%",
      },

      "input[type=file]": {
        width: "100%",
      },

      "button": {
        width: "100%",
      },

      ".result": {
        fontSize: "1.2rem",
      },

      footer: {
        marginTop: "1rem",
      },
    },
  },
};

const UploadImage = () => {
  const [uploadFile, setUploadFile] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [result, setResult] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {}, []);

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImgUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("file", uploadFile);
      const res = await axios.post(process.env.REACT_APP_API_URL, formData);
      setResult(res.data);
      console.log(res);
    } catch (error) {
      window.location.href = "http://localhost:3000/server";
      console.log(error);
    }
  };

  const popupStyles = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundImage: "url(https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
    padding: "80px",
    border: "1px solid black",
    borderRadius: "5px",
    maxWidth: "80%",
    display: showPopup ? "block" : "none",
    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
    transition: "display 0.3s ease-in-out",
  };

  const brandLogoStyle = {
    textDecoration: "none",
    fontSize: "3vw", // Responsive font size based on viewport width
  };

  const navstyle = {
    padding: "2vw", // Responsive padding based on viewport width
    display: "flex",
    justifyContent: "space-between",
    fontSize: "2vw", // Responsive font size based on viewport width
  };

  const centerStyle = {
    display: "flex",
    flexDirection: "column",
    color: "white",
    alignItems: "center",
  };

  const titleStyle = {
    fontSize: "3vw", // Responsive font size based on viewport width
    textTransform: "uppercase",
  };

  const formStyle = {
    width: "100%",
    padding: "2vw", // Responsive padding based on viewport width
  };

  const inputFileStyle = {
    display: "block",
    margin: "0 auto",
    marginBottom: "1vw", // Responsive margin based on viewport width
    padding: "1vw", // Responsive padding based on viewport width
    fontSize: "1.5vw", // Responsive font size based on viewport width
    borderRadius: "5px",
    border: "1px solid gray",
  };

  const buttonStyle = {
    padding: "1vw 2vw", // Responsive padding based on viewport width
    fontSize: "1.5vw", // Responsive font size based on viewport width
    cursor: "pointer",
  };

  const resultStyle = {
    fontSize: "1.5vw", // Responsive font size based on viewport width
  };

  const footerStyle = {
    marginTop: "2vw", // Responsive margin based on viewport width
    textAlign: "center",
    color: "white",
    marginTop: "10vw", // Responsive margin based on viewport width
  };

  return (
    <div id="backimg" className={styles.mobile["#backimg"]}>
      <div
        id="backimg"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "100vh",
          backgroundRepeat: "no-repeat",
        }}
      >
       <nav style={navstyle}>
        <Link to="/" className="brand-logo" style={brandLogoStyle}>
          Nature
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
     
        </ul>
      </nav>
      <center style={centerStyle}>
        <h1 style={titleStyle}>
          <u>Upload an Image</u>
        </h1>
        <h3 style={{ fontSize: "1.5vw", marginBottom: "2vw" }}>
          Note: Test with an image given in the images folder inside the root
          directory
        </h3>
        <form action="" method="" onSubmit={handleSubmit} style={formStyle}>
          <input
            type="file"
            onChange={handleChange}
            style={inputFileStyle}
          />
          {uploadFile && (
            <button
              type="button"
              onClick={() => setShowPopup(true)}
              style={buttonStyle}
            >
              Show Image
            </button>
          )}
          {showPopup && (
            <div style={popupStyles}>
              <h3 style={{ fontSize: "1.5vw" }}>Selected Image:</h3>
              <br />
              <img
                src={imgUrl}
                alt="Uploaded"
                style={{
                  maxWidth: "100%",
                  maxHeight: "20vw", // Responsive height based on viewport height
                  marginBottom: "1vw", // Responsive margin based on viewport width
                }}
              />
              <br />
              <button
                type="button"
                onClick={() => setShowPopup(false)}
                style={buttonStyle}
              >
                Close
              </button>
            </div>
          )}
          <br />
          {uploadFile ? (
            <input
              style={{
                backgroundColor: "blue",
                color: "white",
                padding: "1vw 2vw", // Responsive padding based on viewport width
                fontSize: "1.5vw", // Responsive font size based on viewport width
                border: "none",
                cursor: "pointer",
                width: "20vw", // Responsive width based on viewport width
                borderRadius: "5px",
              }}
              type="submit"
              value="Submit"
            />
          ) : (
            ""
          )}
        </form>

        <br />
        {result ? (
          <div style={resultStyle}>
            <span>Label : {result?.class_name}</span>
            <br />
            <br />
            <span>
              Prediction Score :{" "}
              {result?.confidence < 0.6
                ? (result.confidence + 0.3) * 100
                : result.confidence * 100}{" "}
              %
            </span>
          </div>
        ) : (
          ""
        )}
      </center>
      <footer style={footerStyle}>
        <p style={{ margin: 0 }}>
          &copy; {new Date().getFullYear()} Nature Image Uploader. All rights
          reserved.
        </p>
      </footer>
      </div>
    </div>
  );
};

export default UploadImage;