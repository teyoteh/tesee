import React from "react";

interface GameControllerProps {
  result: string;
}

export const GameController: React.FC<GameControllerProps> = ({ result }) => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>{result}</h2>
    </div>
  );
};
