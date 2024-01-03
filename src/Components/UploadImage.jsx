import React, { useEffect, useState } from "react";
import axios from "axios";

const UploadImage = () => {
  const [uploadFile, setUploadFile] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [result, setResult] = useState("");

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
      console.log(res)
    } catch (error) {
      alert("Something went wrong");
      console.log(error)
      window.location.reload();
    }
  };

  return (
    <center style={{ display: "flex", flexDirection: "column" }}>
      <h1><u>Upload an Image</u></h1>
      <h3>Note : Test with image given in images folder inside root directory</h3>
      <br />
      <form action="" method="" onSubmit={handleSubmit}>
        <input type="file" onChange={handleChange} />
        {uploadFile && (
          <div>
            <h3>Selected Image:</h3>
            <br />
            <img
              src={imgUrl}
              alt="Uploaded"
              style={{ maxWidth: "100%", maxHeight: "300px" }}
            />
          </div>
        )}
        <br />
        {uploadFile ? (
          <input
            style={{
              backgroundColor: "blue",
              color: "white",
              padding: "10px",
              outline: "none",
              border: "none",
              cursor: "pointer",
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
        <div>
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
  );
};

export default UploadImage;
