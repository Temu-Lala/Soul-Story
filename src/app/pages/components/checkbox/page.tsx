import React from "react";
import {Checkbox} from "@nextui-org/react";
import { FaBeer } from 'react-icons/fa';


export default function App() {
  return (
    <div className="flex gap-4">
      <Checkbox defaultSelected icon={<FaBeer />}>Option</Checkbox>
      <Checkbox defaultSelected icon={<FaBeer />} color="warning">Option</Checkbox>
    </div>  
  );
}
