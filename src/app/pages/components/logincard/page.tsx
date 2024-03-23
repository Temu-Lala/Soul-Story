// import React from "react";
// import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link } from "@nextui-org/react";
// import { FaLock } from "react-icons/fa";
// import { IoMailSharp } from "react-icons/io5";
// import {useDisclosure} from '@nextui-org/react';

// export default function App() {
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   return (
//     <>
//       <Button onPress={onOpen} color="primary">Open Modal</Button>
//       <Modal
//         isOpen={isOpen}
//         onClose={onClose}
//         placement="top-center"
//       >
//         <ModalContent>
//           <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
//           <ModalBody>
//             <Input
//               autoFocus
//               endContent={
//                 <IoMailSharp className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
//               }
//               label="Email"
//               placeholder="Enter your email"
//               variant="bordered"
//             />
//             <Input
//               endContent={
//                 <FaLock className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
//               }
//               label="Password"
//               placeholder="Enter your password"
//               type="password"
//               variant="bordered"
//             />
//             <div className="flex py-2 px-1 justify-between">
//               <Checkbox
//                 classNames={{
//                   label: "text-small",
//                 }}
//               >
//                 Remember me
//               </Checkbox>
//               <Link color="primary" href="#" size="sm">
//                 Forgot password?
//               </Link>
//             </div>
//           </ModalBody>
//           <ModalFooter>
//             <Button color="danger" variant="flat" onClick={onClose}>
//               Close
//             </Button>
//             <Button color="primary" onClick={onClose}>
//               Sign in
//             </Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </>
//   );
// }
