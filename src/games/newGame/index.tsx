import React from "react";

interface ImageChoiceProps {
  images: string[];
  onSelect: (image: string) => void;
}

export const ImageChoice: React.FC<ImageChoiceProps> = ({ images, onSelect }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {images.map((image, index) => (
        <div key={index} style={{ margin: "0 10px" }}>
          <img
            src={image}
            alt={`Choice ${index + 1}`}
            style={{ width: "150px", height: "150px", cursor: "pointer" }}
            onClick={() => onSelect(image)}
          />
        </div>
      ))}
    </div>
  );
};
