// src/games/Crash/Slider.tsx

import styled, { css } from "styled-components";

import React from "react";

interface SliderProps {
  min: number;
  max: number;
  value: number;
  range: [number, number];
  onChange: (value: number) => void;
  disabled?: boolean;
}

const Container = styled.div`
  position: relative;
  width: 100%;
`;

const Wrapper = styled.div`
  position: relative;
  background: #ff556a;
  border-radius: 10px;
  box-shadow: 0 0 0px 5px #32294355;
  transition: box-shadow 0.2s ease;
  height: 15px;
  opacity: 1;
  cursor: pointer;
`;

const Track = styled.div`
  background: #55f275;
  height: 100%;
  border-radius: 10px 0 0 10px;
`;

const StyledSlider = styled.input.attrs({ type: "range" })`
  position: absolute;
  left: 0;
  top: 0;
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 100%;
  background: transparent;
  outline: none;
  cursor: pointer;

  &:disabled {
    cursor: default;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 50px;
    background-image: url("/games/crash/rocket.gif");
    background-size: cover;
    background-position: center;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 30px; // Adjust the size as needed
    height: 30px;
    background-image: url("/games/crash/rocket.gif");
    background-size: cover;
    background-position: center;
    cursor: pointer;
    border-radius: 50%;
  }
`;

const Label = styled.div<{ $active: boolean }>`
  margin-top: 10px;
  position: absolute;
  transform: translateX(-50%);
  text-align: center;
  background: #32294322;
  padding: 5px;
  border-radius: 10px;
  min-width: 30px;
  color: #ff949f;
  transition: left 0.2s ease;
  font-size: 75%;

  ${(props) =>
    props.$active &&
    css`
      color: #94ff94;
    `}
`;

function Slider({
  min: minValue,
  max: maxValue,
  value,
  onChange,
  disabled,
  range: [min, max],
}: SliderProps) {
  const labels = Array.from({ length: 5 }).map(
    (_, i, arr) => min + Math.floor((i / (arr.length - 1)) * (max - min)),
  );

  const change = (newValue: number) => {
    const fixedValue = Math.max(minValue, Math.min(maxValue, newValue));
    if (fixedValue !== value) onChange(fixedValue);
  };

  return (
    <Container>
      <Wrapper>
        <Track style={{ width: `calc(${(value / max) * 100}%)` }} />
        <StyledSlider
          value={value}
          disabled={disabled}
          min={min}
          max={max}
          onChange={(event) => change(Number(event.target.value))}
        />
      </Wrapper>
      {labels.map((label, i) => (
        <Label
          key={i}
          $active={value >= label}
          style={{ left: (label / max) * 100 + "%" }}
        >
          {label}
        </Label>
      ))}
    </Container>
  );
}

export default Slider;
