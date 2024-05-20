import React from 'react'
import Image from 'next/image'
import Navbar from '@/components/navbar'
import Link from 'next/link'
import insta from '@/public/insta.svg';
import mail from '@/public/mail.svg';
import linkedin from '@/public/linkedin.svg';

const faq = () => {
  return (
    <body className="flex flex-col items-center">
      <div className='flex items-center'>
        <Navbar/>
      </div>
      <div className='flex p-10 text-center justify-center align-middle'>
      <h1 className="text-white lg:text-5xl md:text-5xl sm:text-5xl font-bold drop-shadow-3xl text-center p-8">FAQ'S</h1>
      </div>
      <div className='flex flex-col gap-10 items-center justify-center align-middle p-5'>
        <div className='flex flex-col w-full h-[15.875rem] bg-white rounded-2xl drop-shadow-3xl'>
          <h2 className='text-black font-bold lg:text-[30px] md:text-[30px] sm:text-[21px] text-left pt-4 pl-4'>What is the AeroAstro Club?</h2>
          <p className='text-black font-bold lg:text-[25px] md:text-[25px] sm:text-[21px] text-left pt-6 pl-4'>This club lays prime focus on latest technology and innovations that bring the versatility of its students to the fore and gives them a sound sense of perspective. The mentors comprises of experienced and dedicated advisors who with their expert inputs encourage students to explore new avenues.</p>
        </div>
        <div className='flex flex-col w-full h-[15.875rem] bg-white rounded-2xl drop-shadow-3xl'>
          <h2 className='text-black font-bold lg:text-[30px] md:text-[30px] sm:text-[21px] text-left pt-4 pl-4'>Who can join the club?</h2>
          <p className='text-black font-bold lg:text-[25px] md:text-[25px] sm:text-[21px] text-left pt-6 pl-4'>The club is open to all students across different disciplines who share an interest in aerospace, whether it's engineering, science, business, or any other field. You don't need to be an aerospace major to join!</p>
        </div>
        <div className='flex flex-col w-full h-[15.875rem] bg-white rounded-2xl drop-shadow-3xl'>
          <h2 className='text-black font-bold lg:text-[30px] md:text-[30px] sm:text-[21px] text-left pt-4 pl-4'>What activities does the club organize?</h2>
          <p className='text-black font-bold lg:text-[25px] md:text-[25px] sm:text-[21px] text-left pt-6 pl-4'>We organize a wide range of activities such as workshops, guest lectures by industry professionals, field trips to aerospace facilities, hands-on projects, competitions, and social events. These activities are designed to provide both educational and networking opportunities.</p>
        </div>
        <div className='flex flex-col w-full h-[15.875rem] bg-white rounded-2xl drop-shadow-3xl'>
          <h2 className='text-black font-bold lg:text-[30px] md:text-[30px] sm:text-[21px] text-left pt-4 pl-4'>How can I be a part of this club?</h2>
          <p className='text-black font-bold lg:text-[25px] md:text-[25px] sm:text-[21px] text-left pt-6 pl-4'>Joining the club involves biannual recruitment for specialized positions like web developer, social media handler, content writer, and designer. Keep an eye out for our recruitment announcements, and participate in interviews during these periods.</p>
        </div>
      </div>

      <footer className='flex flex-row justify-evenly bg-black w-full lg:pt-35% lg:pb-15% md:pt-10% md:pb-5% sm:pt-10% sm:pb-5%'>
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

export default faq