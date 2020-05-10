import React from "react";
import { Title, VolumeSlider } from "./Volume.css";

export const Volume = (props) => {
  return (
    <div>
      <label for="vol">
        <Title>Volume</Title>
        <VolumeSlider
          id="vol"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={props.volumeSlider}
          onChange={props.volumeControl}
        ></VolumeSlider>
      </label>
    </div>
  );
};
