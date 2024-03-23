'use client'

import React from "react";
import {Input} from "@nextui-org/react";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

export default function App() {
  const [isVisible, setIsVisible] = React.useState(false);
  const sizes = ["sm", "md", "lg"];

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div>
    <Input
      label="Password"
      variant="bordered"
      placeholder="Enter your password"
      endContent={
        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
          {isVisible ? (
            <FaEye className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <FaEyeSlash className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      }
      type={isVisible ? "text" : "password"}
      className="max-w-xs"
    />
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Input type="email" label="Email" placeholder="Enter your email" />
    </div>
  </div>
  );
}
