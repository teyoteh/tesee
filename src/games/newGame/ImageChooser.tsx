// src/games/ImageChooser.tsx

import React, { useState } from 'react';

const ImageChooser: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [result, setResult] = useState<string>('');

  const images = [
    "/image1.jpg", // İlk resim
    "/image2.jpg", // İkinci resim
  ];

  const handleSelectImage = (image: string) => {
    setSelectedImage(image);
    const winner = Math.random() < 0.5 ? 'image1' : 'image2'; // Rastgele kazanan seçimi
    setResult(winner === image ? 'You Win!' : 'You Lose!');
  };

  return (
    <div>
      <h1>Choose an Image</h1>
      <div style={{ display: 'flex' }}>
        {images.map((image, index) => (
          <div key={index} style={{ margin: 10 }}>
            <img
              src={image}
              alt={`image-${index + 1}`}
              style={{ width: 100, height: 100, cursor: 'pointer' }}
              onClick={() => handleSelectImage(image)}
            />
          </div>
        ))}
      </div>
      {selectedImage && <p>You selected: {selectedImage}</p>}
      {result && <p>{result}</p>}
    </div>
  );
};

export default ImageChooser;
