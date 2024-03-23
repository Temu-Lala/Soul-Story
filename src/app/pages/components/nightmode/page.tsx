import React from "react";
import {Switch} from "@nextui-org/react";
import { FaMoon } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";

export default function App() {
  return (
    <Switch
      defaultSelected
      size="lg"
      color="success"
      startContent={<IoIosSunny />}
      endContent={<FaMoon />}
    >
      Dark mode
    </Switch>
  );
}
