import React from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import Imagesceleton from '../image/page'

export default function App() {
  return (
    <div>
    <Card isFooterBlurred radius="lg" className="border-none  w-fit relative">
      <div className="relative">
      <Image
 
      alt="Photo"
      className="object-cover w-full h-full"
      src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    />
       
        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1  overflow-hidden object-cover py-1 absolute before:rounded-xl w-96 rounded-large bottom-1 shadow-small ml-1 z-10">
          <p className=" text-white text-2xl ">Temesgen debebe</p>
          <Button
            className="text-tiny text-white bg-black/20"
            variant="flat"
            color="default"
            radius="lg"
            size="sm"
          >
            Notify me
          </Button>
        </CardFooter>
      </div>
    </Card>
    </div>
  );
}
