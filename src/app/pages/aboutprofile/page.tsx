import React from 'react'
import PHotoCard from '../components/card/page'
import ColorPicer from '../components/colorpicker/page'
import {Button} from "@nextui-org/react";
import ColorDefntion from '../components/colordefntion/page'
import NavBarTwo from '../components/navbarTwo/page'
export default function page() {
  return (
    <div className=' flex flex-col w-screen  h-screen bg-transparent'>
        {/* <div className='flex flex-row  h-48 relative z-50'>      
          <div className=' flex flex-1 w-1/2'> <ColorPicer/></div> 
        <div             style={{ backgroundColor: "transparent" }}
 className=' flex flex-1  bg-transparent '><ColorDefntion/></div>     
</div> */}


 <div className=' flex   w-full'>

<div className='  flex rounded-none h-12  z-50'><ColorPicer/> </div>
<div style={{borderRadius:20}} className='  flex w-full h-12 z-0  rounded-4xl' >  <NavBarTwo/></div>
</div> 

    <div className='flex w-screen flex-row h-screen overflow-y-scroll'>


<div className='flex flex-col flex-1 bg-transparent justify-center items-center gap-12'>
    <div><PHotoCard/></div>
    <div className=' flex gap-12'>
    <Button color="secondary">
        Secondary
      </Button>  
      <Button color="success">
        Success
      </Button>  
      <Button color="warning">
        Warning
      </Button>  
    </div>




</div>
<div className='flex flex-1  bg-transparent flex-col justify-center items-center break-words gap-12'><samp className=' text-4xl underline font-bold'>Temesgen Debebe </samp>
<span>




John Smith is a passionate writer, educator, and entrepreneur dedicated to making a positive impact in the world. Born and raised in a small town in the Midwest, John developed a love for storytelling and creativity from a young age.

After earning a degree in English Literature from a prestigious university, John embarked on a journey to pursue his dreams of becoming a writer. He started his career as a freelance writer, contributing articles to various publications and websites on topics ranging from literature and culture to entrepreneurship and personal development.

Driven by a desire to share his knowledge and inspire others, John transitioned into the field of education. He obtained a teaching credential and began teaching English at a local high school, where he quickly became known for his innovative teaching methods and ability to connect with students.

In addition to his work in education, John is also an avid entrepreneur. He founded a successful online platform dedicated to providing resources and support for aspiring writers, helping them hone their craft and achieve their goals.

Outside of his professional pursuits, John enjoys spending time outdoors, exploring nature, and traveling to new destinations. He is deeply committed to giving back to his community and volunteers his time with local organizations that support literacy and education initiatives.

John's passion for writing, teaching, and entrepreneurship fuels his mission to empower others to realize their full potential and make a positive impact in the world.

--- 

Feel free to customize it according to your own experiences, accomplishments, and aspirations!</span>
<div className='flex gap-12'> <Button color="success">
        Success
      </Button>  
      <Button color="warning">
        Warning
      </Button>  </div>




</div>


    </div>
    </div>
  )
}
