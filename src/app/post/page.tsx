'use client'
import Image from 'next/image'
import React from 'react'

const Page = () => {
  return (
    <div className='post sm:text-center'>
       <div className='heading sm:text-center'> <h1>Learn Ai With Sir Zia</h1>
        <div className="image">
              <Image 
              
              alt='image for blog'
              src={require("../../../public/pixlr-image-generator-f4e1ede8-c71e-44f7-82f8-e6070171b9a7.png")}
             />
            </div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe eligendi vel quis ad <br />aut corrupti quaerat nam voluptatibus labore possimus <br /> dolorum quod perferendis dolorem, fugiat animi velit exercitationem ullam pariatur!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Sint quidem perspiciatis, aperiam eveniet rem dignissimos nostrum doloremque quas <br /> voluptatem unde, laborum beatae similique aliquid laboriosam quos nisi rerum <br /> minima laudantium!

        </p>
        </div>
    </div>
  )
}

export default Page    