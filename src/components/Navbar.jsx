import { useState } from 'react';
import React from 'react'
import img from '../pictures/logo.png'
import img1 from '../pictures/pic.webp'
import img2 from '../pictures/yt.jpg'
import img3 from '../pictures/yt1jpg.jpg'
import img4 from '../pictures/ranjith1.jpg'
import { AiOutlineClose,AiOutlineMenu} from 'react-icons/ai';
import {
 FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaYoutube,
 
} from 'react-icons/fa';

import  {FiMessageSquare} from 'react-icons/fi'

const Navbar = () => {
  const [nav,setNav]=useState(false);
  const handle=()=>{
    setNav(!nav)
  }
  return (
    <div className='flex flex-col '>
      <div className='flex items-center justify-around  p-[10px]  h-[80px] text-white  '>
       <div>
       <img className='w-[200px]' src={img} alt="" />
       </div>
       <div onClick={handle} className='md:hidden text-white cursor-pointer'>
        {nav? <AiOutlineClose/>:<AiOutlineMenu/>}
       </div>
        <div className='hidden md:flex  md:w-[700px] justify-between'>
         <div className='text-green-400 p-3'>Home</div>
         <div className='hover:bg-[#019634] p-3'>Backup</div>
         <div className='hover:bg-[#019634] p-3'>Download</div>
         <div className='hover:bg-[#019634] p-3'>localhost</div>
         <div className='hover:bg-[#019634] p-3'>Uninstall</div>
         <div className='hover:bg-[#019634] p-3'>VPN</div>
         <div className='hover:bg-[#019634] p-3'>VPS</div>
         <div className='hover:bg-[#019634] p-3'>More</div>
         <div className='hover:bg-[#019634] p-3'>Contact</div>
        </div>
        <div  className={nav? 'w-screen text-left items-start py-2  px-[50px] absolute top-[70px] flex md:hidden flex-col justify-between    h-[600px] ':'hidden'}>
         <div className='p-3 w-full cursor-pointer  text-green-400 '>Home</div>
         <div className='p-3 w-full cursor-pointer hover:hover:bg-[#019634] '>Backup</div>
         <div className='p-3 w-full cursor-pointer hover:hover:bg-[#019634]'>Download</div>
         <div className='p-3 w-full cursor-pointer hover:hover:bg-[#019634]'>localhost</div>
         <div className='p-3 w-full cursor-pointer hover:hover:bg-[#019634]'>Uninstall</div>
         <div className='p-3 w-full cursor-pointer hover:hover:bg-[#019634]'>VPN</div>
         <div className='p-3 w-full cursor-pointer hover:hover:bg-[#019634]'>VPS</div>
         <div className='p-3 w-full cursor-pointer hover:hover:bg-[#019634]'>More</div>
         <div className='p-3 w-full cursor-pointer hover:hover:bg-[#019634]'>Contact</div>
        </div>
        </div>  
        <div >
        <div className={nav? "flex flex-col text-white space-y-5 items-center absolute md:static top-[600px]":"flex flex-col text-white space-y-5 items-center"}>
            <div className='space-y-5'>
            <img className='' src={img1} alt="" />
<div className='text-center w-[300px]  py-[10px] px-[50px] bg-[#019634]'>
  {/* mention the width for medium */}
<a className='hover:text-green-500  ' rel="noopener noreferrer"  href="http://localhost/">Go to localhost</a>
</div>
            </div>
            
        <div className='b px-[30px] md:px-[150px] flex flex-col items-center  text-xl space-y-7  '>
         <p className='space-y-4'> <p className='text-[#01FE55] text-3xl'>what is localhost</p><p>The term Localhost is a machine which a web server can be accessed by network administrators from directly the computer. It allows you to develop web project on your system without having to upload the project to an internet hosted sever.</p></p>
         
         <p>
         Localhost is a development tool for testing if your PHP site is running. Point website visitors to localhost instead and you will see what it looks like if they do not have your page cached. Useful for testing changes and making sure that things still work in network interface hardware.
         </p>
         <p>Most developers, designers and even bloggers would agree that the day they discover localhost was a great day for them. It is unfortunate to see so many people struggle with this service. Lately, I have seen some cases where everything was working perfectly fine working on localhost then suddenly stopped. Thankfully, I have helped my students fix these issues before they start hiking up their SEO agency bills.</p>
         <p>What does localhost mean? For most people, it refers to a specific server or device with an address. Most people associate domain names like Amazon.com or pinterest.com with a server or device that can handle those requests (in this example, www.amazon.com, 66.33.206.188).</p>
     <div class='flex items-center justify-center'>
  <a href="https://youtu.be/m98GX51T5dI">
    <div class='relative'>
      <img class='w-[1200px]' src={img2} alt="" />
      <FaYoutube class='absolute top-1/2 h-auto w-[10vw] left-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-300' />
    </div>
  </a>
</div>
<p className='space-y-4'><p className='text-[#01FE55] text-3xl'>localhost ip</p> <p>Localhost is a virtual server, sometimes, with a Self-Signed Certificate. To access localhost – you need to use IP 127.0.0.1 in your browser address bar. You can also use the hostname localhost to access the same server . 127.0.0.1 stands for localhost and ::1 stands for ipv6 localhost</p> </p>
<p>localhost is the loopback mechanism network protocol. It is defined in RFCs 878 and 1122. It is implemented in most computer operating systems and allows an application to communicate with itself across a network, using the IP address 127.0.0.1 or an address between 127.0.0.2 through 127.255.255.254 inclusive.</p>

<p className='space-y-4'><p className='text-[#01FE55] text-3xl'> localhost refused to connect </p> <p><span className='text-[#01FE55] '>Localhost server Refused To Connect</span> The Error Is This Because Of Website Hosting On Windows Platform Or Is It Because of my Computer Configuration. If You Have Already Received This Error Then Try These Things To Fix This Problem. Ever struggled to get WordPress up and running on localhost server? I have. I was trying to put some plugins onto a local WordPress install, but an error was stopping me from doing so. I had to do some googling to find the right solution. Now, I’m going to show you how to fix this problem for good.</p>

</p>

<div class='flex items-center justify-center'>
  <a href="https://youtu.be/m98GX51T5dI">
    <div class='relative'>
      <img class='w-[1200px]' src={img3} alt="" />
      <FaYoutube class='absolute top-1/2 h-auto w-[10vw] left-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-300' />
    </div>
  </a>
</div>
    
<p className='space-y-4'><p className='text-[#01FE55] text-3xl'>localhost redirected you too many times</p> <p> Sometimes you’ll get the error certificate for localhost is currently unable to handle this request for your web project. This mostly happens when you’re running a local server but trying to access a domain that you’ve deployed. It can be quite frustrating not being able to use your freshly created website. I decided to research and write an article on how to solve this problem.</p></p>
<p className='space-y-4'> <p className='text-[#01FE55] text-3xl'>localhost on mac</p> <p>One way to run PHP on your Mac is to run it locally, which can be done in 2 ways. Using a virtual host like Amazon or Vagrant is a way to spin up virtual websites on the fly while compiling them on your own is an old-fashioned way of producing websites. For this post, I will present both methods, explain how I use the second approach to evaluate PHP locally, and leave it up to you to figure out the second method.</p> </p>
<p>A website about search engine targeting that is hosted on your own computer is called a localhost blog on a Mac. We’ll give you solutions to your problems, like blog posts and forum posts that will help your site’s ranking, as well as a small amount of money to help you with your next projects. Please give us any ideas you have with regards to expanding our service offerings. Please let us know any other ways you can help us.
</p>
<div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3 text-center text-2xl'>
  <div className='bg-[#222222] hover:text-[#01FE55] cursor-pointer p-10'>Top 5 Hassle-Free Steps to Download Free Podcasts on Your iPhone</div>
  <div  className='bg-[#222222] hover:text-[#01FE55] cursor-pointer p-10'>Top 7 Steps to Downloading Your Favorite Podcasts for Free</div>
  <div  className='bg-[#222222] hover:text-[#01FE55] cursor-pointer p-10'>Top 10 Easy Steps to Downloading Free Music on Your Laptop</div>
  <div  className='bg-[#222222] hover:text-[#01FE55] cursor-pointer p-10'>8 Easy Steps to Download Free Games on Your iPhone: A Comprehensive Guide</div>
  <div  className='bg-[#222222] hover:text-[#01FE55] cursor-pointer p-10'>Top 10 Websites to Download Free Background Music for Your Projects!</div>
  <div  className='bg-[#222222] hover:text-[#01FE55] cursor-pointer p-10'>5 Simple Steps to Easily Download Foxit PDF Editor Today</div>
</div>
<div className='border-solid p-5 space-y-5 text-white border-white border-2'>
<div className='border-b-2  border-dotted'>
  <p>
    Author Profile
  </p>
</div>
<div >
 <div className='flex space-x-5'>
 <img className='w-[10vw] rounded-md h-[10vw]' src={img4} alt="" />
  <div className='space-y-5'>
    <p>Ranjith Kumar</p>
    <p> I am a second year Engineering student. I build website using React.Js and Tailwind CSS.Recently I've started learning Node.js,Express.js and mongoDB.</p>
    <p className='flex space-x-6'>
      <a  href="https://github.com/ranjithkumar404"><FaGithub size={30}/></a>
      <a href="https://instagram.com/_ranjithshetty_?igshid=MzNlNGNkZWQ4Mg=="><FaInstagram size={30}/></a>
      <a href="https://www.linkedin.com/in/ranjith-kumar-18a60a238/"><FaLinkedin size={30}/></a>
      <a href="https://t.me/ranjithkumar2003"><FaTelegram size={30}/></a>
     
    </p>
  </div>
 </div>
 <div className='flex mt-7 border-b-2 p-2 text-lg text-[#323233]  space-x-10  border-dotted justify-between'>
    <p>Latest entries</p>
    <p>Author Archieves</p>
   </div>
  <div className='grid sm:grid-cols-4  gap-8 p-3 text-sm'>
   
    <div className='border-b-2 sm:grid gap-4  flex sm:border-none  space-x-10 sm:space-y-24 sm:place-items-center  border-dotted'>
<img className='text-[#01FE55]' src="" alt="Thank you" /><div>
  <p>2023.03.12</p>
  <p>Thank you</p>
</div>
    </div>
    <div className='border-b-2 sm:place-items-center  sm:grid gap-4  flex sm:border-none sm:space-y-24 space-x-10  border-dotted'>
<img className='text-[#01FE55] ' src="" alt="Sitemap" />
<div className='text-left'>
  <p>2023.01.19</p>
  <p>Sitemap</p>
</div>
    </div>
    <div className='border-b-2 sm:place-items-center  sm:grid gap-4  flex sm:border-none sm:space-y-24 space-x-10  border-dotted'>
<img className='text-[#01FE55] ' src="" alt="Terms & conditions" />
<div className='text-left'>
  <p>2023.01.19</p>
  <p>Terms & conditions</p>
</div>
    </div>
    <div className='border-b-2 sm:place-items-center sm:space-y-24  sm:grid gap-4  flex sm:border-none  space-x-10  border-dotted'>
<img className='text-[#01FE55] ' src="" alt="Privacy Statement" />
<div className='text-left'>
  <p>2023.01.19</p>
  <p>Privacy Statement</p>
</div>
    </div>
  </div>
</div>
</div>
<div className='space-y-7'>
 <div  className='flex space-x-10 '>
 <FiMessageSquare size={60} className='bg-[#01FE55] p-3 rounded-full'/>
 <div>
  <p className='font-bold text-4xl text-[#7B7B7A]'>You need support?</p>
  <p className='text-[#7A7B7B]'>Leave your message and we'll get back to you shortly.</p>
 </div>
 </div>
 <div className='grid gap-2'>
  <label className='font-bold text-[#7A7B7B]' htmlFor="">Email address *</label>
  <input className='bg-[#3F3F3F] focus:outline-none rounded-3xl w-[40%] px-2 py-3' type="text"text-center placeholder='example@domain.com' name="" id="" />
 </div>
 <div className='grid gap-2'>
  <label className='font-bold text-[#7A7B7B]' htmlFor=""> Describe your problem *</label>
 
  <textarea  className='bg-[#3F3F3F] resize-none rounded-3xl outline-none  px-2 py-3' name="" id="" cols="30" rows="2" placeholder='Tell us briefly about your needs '></textarea>
 </div>
 <button className='bg-[#01FE55] px-7 py-2 rounded-3xl'>Submit</button>
</div>
       </div>
      <div className='text-center p-3'>
        <p  className='text-[#B2B3BF]'> © 2023 localhost</p>
        <p className='text-[#B2B3BF]'>
        Contact - Privacy Statement - Terms & conditions - Cookie Policy - Sitemamp</p>
      </div>
        
    </div>
    </div>
    </div>
    
  )
}

export default Navbar