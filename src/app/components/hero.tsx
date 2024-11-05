'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type IData = {
  title:string,
  description: string
}

const data:IData[] = [
  {title: 'learn Ai', description: ' for your best future and exitment job you will must learn ai '},
  {title:'Learn BlogChain', description: 'BlogChain Is the latest tech revolution in modern era'},
  {title:'Learn BlogChain', description: 'BlogChain Is the latest tech revolution in modern era'},

 ];

const Hero = () => {
  return (
    <div className='first-div sm:text-center'>
      {data.map((IData)=>(
        <div className="second-div sm:text-center">
            <div className="img">
              <Image 
              layout='fill'
              alt='image for blog'
              src={require("../../../public/pixlr-image-generator-f4e1ede8-c71e-44f7-82f8-e6070171b9a7.png")}
             />
            </div>

            <h1>{IData.title}</h1>
            <p>{IData.description}</p>
              <Link href={"/post"} > <button className='btn-low'>Read More...</button></Link> 
        </div>
        ))}
    </div>
  )
}

export default Hero