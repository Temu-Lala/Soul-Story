"use client" 

import React, { useState } from "react";
import { Slider } from "@nextui-org/react";

export default function App() {
  // State to store the brightness value
  const [brightness, setBrightness] = useState(100);

  // Function to handle slider change
  const handleSliderChange = (value) => {
    // Update brightness value
    setBrightness(value);
  };

  return (
    <div>
      {/* Slider component to adjust brightness */}
      <Slider
        label="Brightness"
        step={1}
        maxValue={200} // Adjust the maximum value as per your requirement
        minValue={0}
        defaultValue={100}
        className="max-w-md"
        onChange={handleSliderChange}
      />
      
      {/* Image with inline style for brightness adjustment */}
      <img
        src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Replace with your image URL
        alt="Your Image"
        style={{ filter: `brightness(${brightness}%)` }}
      />
    </div>
  );
}
