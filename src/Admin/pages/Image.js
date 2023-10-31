import { React, useState, useEffect } from "react";

const Image = (props) => {
  const { ImageData, imageNames, setImageNames } = props;
  const [imageArray, setImageArray] = useState([]);

  useEffect(() => {
    setImageArray(ImageData);
  }, [ImageData]);

  const removeImage = (index) => {
    setImageArray((prevImages) => {
      const updatedImages = [...prevImages];
      updatedImages.splice(index, 1);
      return updatedImages;
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flex - start",
        marginTop: "20px",
        position: "relative",
      }}
    >
      {imageArray
        ? imageArray.map((image, index) => {
            console.log("insidde map", image);
            return (
              <div
                key={index}
                style={{
                  position: "relative",
                  marginRight: "10px",
                  marginBottom: "10px",
                }}
              >
                <img
                  src={image}
                  alt="Preview"
                  style={{
                    display: "block",
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                    cursor: "pointer",
                  }}
                />
                <button
                  style={{
                    position: "absolute",
                    top: "0px",
                    right: "0px",
                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                    border: "none",
                    borderRadius: "50%",
                    width: "25px",
                    height: "25px",
                    color: "#9c27b0",
                    fontWeight: "bold",
                    cursor: "pointer",
                    fontSize: "20px",
                  }}
                  type="button"
                  onClick={() => {
                    removeImage(index);
                    const newData = [...imageNames, image];
                    setImageNames(newData);
                  }}
                >
                  X
                </button>
              </div>
            );
          })
        : "ImageData"}
    </div>
  );
};

export default Image;
