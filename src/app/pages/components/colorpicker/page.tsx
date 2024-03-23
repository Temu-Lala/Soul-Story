"use client";
import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";
import {Popover, PopoverTrigger, PopoverContent, Button} from "@nextui-org/react";
export default function App() {
  // State to store the selected color
  const [selectedColor, setSelectedColor] = useState("#ffffff");

  // Function to handle color change
  const handleColorChange = (color) => {
    setSelectedColor(color);
    document.body.style.backgroundColor = color; // Set background color of the body
    if(color === '#000000')
    {
        document.body.style.borderBottom = color === "#000000" ? "2px solid #FFFFFF" : "none";


    }
    else
    {
        document.body.style.borderBottom = color === "#FFFFFF" ? "2px solid #FFFFFF" : "none";

    }
  };


  return (
    <Popover placement="right">
        <div className=" w-screen h-48">
      <PopoverTrigger>
        <Button>Chenge </Button>
      </PopoverTrigger>
      </div>
      <PopoverContent>
      <div className="App">
      <section className="resposive example">
        {/* Render HexColorPicker with onChange event */}
        <HexColorPicker color={selectedColor} onChange={handleColorChange} />
      </section>
    </div>
      </PopoverContent>
    </Popover>
  );
}
