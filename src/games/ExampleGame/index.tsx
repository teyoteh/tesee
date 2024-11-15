import { useState, useEffect } from 'react';

function Game() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const imageFiles = ['resim1.jpg', 'resim2.png'];
    setImages(imageFiles);
  }, []);

  const handleImageClick = (imageName: string) => {
    setSelectedImage(imageName);
  };

  const handlePlay = () => {
    if (selectedImage) {
      const randomIndex = Math.floor(Math.random() * images.length);
      setResultImage(images[randomIndex]);
    }
  };

  return (
    <div>
      <h2>Resim Seç</h2>
      <div>
        {images.map((image) => (
          <img
            key={image}
            src={`/images/${image}`}
            alt={image}
            onClick={() => handleImageClick(image)}
            style={{
              cursor: 'pointer',
              margin: '10px',
              border: selectedImage === image ? '2px solid green' : 'none',
            }}
          />
        ))}
      </div>

      <button onClick={handlePlay} disabled={!selectedImage}>
        Play
      </button>

      {resultImage && (
        <div>
          <h2>Sonuç</h2>
          <img src={`/images/${resultImage}`} alt="Sonuç Resmi" />
          {resultImage === selectedImage ? (
            <p>Kazandınız!</p>
          ) : (
            <p>Kaybettiniz!</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Game;
