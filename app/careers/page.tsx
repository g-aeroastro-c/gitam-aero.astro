import React from 'react'
import bg from '@/public/career.png'
import Image from 'next/image'
import Navbar from '@/components/navbar'
import Link from 'next/link'
import insta from '@/public/insta.svg';
import mail from '@/public/mail.svg';
import linkedin from '@/public/linkedin.svg';

const careers = () => {
  return (
    <body className="flex flex-col items-center">
      <div className='flex items-center'>
        <Navbar/>
      </div>
      <div className="flex justify-center align-middle relative z-[-1]">
        <Image
          src={bg}
          width={446}
          height={408}
          alt='bg_image'
        />
        <h1 className="absolute text-white lg:text-5xl md:text-5xl sm:text-[120px] font-bold drop-shadow-3xl text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pt-10">CAREERS</h1>
      </div>
      <h1 className='text-white lg:text-[30px] md:text-[30px] sm:text-[21px] font-bold text-left'>Available postions</h1>
      <div className='flex flex-col gap-10 items-center justify-center align-middle p-5'>
        <div className='flex flex-col w-full h-[15.875rem] bg-white rounded-2xl drop-shadow-3xl'>
          <h2 className='text-black font-bold lg:text-[30px] md:text-[30px] sm:text-[21px] text-left pt-4 pl-4'>Web Developer</h2>
          <p className='text-black font-bold lg:text-[25px] md:text-[25px] sm:text-[21px] text-left pt-6 pl-4'>Join us as a web developer, crafting and maintaining our website for an immersive user experience. Your role elevates site navigation and functionality. At AeroAstro Club, embrace the dynamic fusion of technology and aerospace.</p>
        </div>
        <div className='flex flex-col w-full h-[15.875rem] bg-white rounded-2xl drop-shadow-3xl'>
          <h2 className='text-black font-bold lg:text-[30px] md:text-[30px] sm:text-[21px] text-left pt-4 pl-4'>Content Writer</h2>
          <p className='text-black font-bold lg:text-[25px] md:text-[25px] sm:text-[21px] text-left pt-6 pl-4'>As a content writer at AeroAstro Club, you'll craft engaging aerospace content, implement SEO strategies, collaborate with teams, and ensure captivating storytelling. Join us in shaping how the world explores flight and space!.</p>
        </div>
        <div className='flex flex-col w-full h-[15.875rem] bg-white rounded-2xl drop-shadow-3xl'>
          <h2 className='text-black font-bold lg:text-[30px] md:text-[30px] sm:text-[21px] text-left pt-4 pl-4'>Designer</h2>
          <p className='text-black font-bold lg:text-[25px] md:text-[25px] sm:text-[21px] text-left pt-6 pl-4'>A designer at AeroAstro Club creates captivating visuals that tell our aerospace story across platforms. Collaborating with teams, they ensure brand consistency, innovation, and user-centric designs. Join us and visually inspire the world of flight and space exploration!</p>
        </div>
        <div className='flex flex-col w-full h-[15.875rem] bg-white rounded-2xl drop-shadow-3xl'>
          <h2 className='text-black font-bold lg:text-[30px] md:text-[30px] sm:text-[21px] text-left pt-4 pl-4'>Social Media Handler</h2>
          <p className='text-black font-bold lg:text-[25px] md:text-[25px] sm:text-[21px] text-left pt-6 pl-4'>At AeroAstro Club, a social media handler crafts engaging content, engages with our audience, analyzes metrics, tracks trends, supports campaigns, and advocates for our brand. Join us to connect with aerospace enthusiasts global.</p>
        </div>
      </div>

      <footer className='flex flex-row justify-evenly bg-black w-full lg:pt-25% lg:pb-15% md:pt-10% md:pb-5% sm:pt-10% sm:pb-5%'>
        <div className='text-slate-50'>
          <h2 className='font-bold lg:text-[1.5625rem] pb-5 md:text-[1.2625rem] sm:text-[1.00rem]'>EVENTS</h2>
          <ul className='lg:font-extralight lg:text-[1.4625rem] md:font-extralight md:text-[1.4625rem] md:text-sm'>
            <li className='pb-4'><Link href='#'>Rocketry 101</Link></li>
            <li className='pb-4'><Link href='#'>Rocketry 2.0</Link></li>       
            <li className='pb-4'><Link href='#'>Diana's Eve</Link></li>
            <li className='pb-4'><Link href='#'>FrostHack 2k23</Link></li>
            <li className='pb-4'><Link href='#'>Sangharsh</Link></li>
          </ul>
        </div>
        <div className='text-slate-50'>
          <h2 className='font-bold lg:text-[1.5625rem] pb-5 md:text-[1.2625rem] sm:text-[1.00rem]'>ABOUT US</h2>
          <ul className='lg:font-extralight lg:text-[1.4625rem] md:font-extralight md:text-[1.4625rem] md:text-sm'>
            <li className='pb-4'><Link href='#'>Teams</Link></li>
            <li className='pb-4'><Link href='#'>Executive Body</Link></li>
            <li className='pb-4'><Link href='#'>Advisors</Link></li>
            <li className='pb-4'><Link href='#'>Careers</Link></li>
          </ul>
        </div>
        <div className='text-slate-50'>
          <h2 className='font-bold lg:text-[1.5625rem] pb-5 md:text-[1.2625rem] sm:text-[1.00rem]'>SOCIAL MEDIA</h2>
          <ul className='lg:font-extralight lg:text-[1.4625rem]  md:font-extralight md:text-[1.4625rem] md:text-sm pb-4' style={{ display: 'flex', alignItems: 'center' }}>
            <li className='lg:pr-4 md:pr-3 sm:pr-2'>
              <Image src={insta} alt='Instagram logo' width={40} height={40} />
            </li>
            <li className='pb-4'>
              Instagram<br />
              <Link href='https://www.instagram.com/'><span className='underline decoration-solid'>g.aeroastro</span></Link>
            </li>
          </ul>
          <ul className='lg:font-extralight lg:text-[1.4625rem]  md:font-extralight md:text-[1.4625rem] md:text-sm pb-4' style={{ display: 'flex', alignItems: 'center' }}>
            <li className='lg:pr-4 md:pr-3 sm:pr-2'>
              <Image src={mail} alt='Mail logo' width={40} height={40} />
            </li>
            <li className='pb-4'>
              Email<br />
              <Link href='https://mail.google.com/'><span className='underline decoration-solid'>aeroastro_vzg@gitam.in</span></Link>
            </li>
          </ul>
          <ul className='lg:font-extralight lg:text-[1.4625rem]  md:font-extralight md:text-[1.4625rem] md:text-sm pb-4' style={{ display: 'flex', alignItems: 'center' }}>
            <li className='lg:pr-4 md:pr-3 sm:pr-2'>
              <Image src={linkedin} alt='Linkedin logo' width={40} height={40} />
            </li>
            <li className='pb-4'>
              Linkedin<br />
              <Link href='https://www.linkedin.com/'><span className='underline decoration-solid'>GITAM Aero Astro Club</span></Link>
            </li>
          </ul>
        </div>
      </footer>
      
    </body>
  )
}

export default careers