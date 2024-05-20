import Navbar from '../components/navbar';
import Gallery from '../components/gallery';
import Carousel from '../components/carouselEvent';
import insta from '../public/insta.svg';
import mail from '../public/mail.svg';
import linkedin from '../public/linkedin.svg'; 
import Link from 'next/link';
import Image from 'next/image';
import Carousel_team from '@/components/carouselTeam';

export default function Home() {
  return (
    <body className='font:Roboto'>

      <div className="inline-flex justify-center text-center w-full">
        <div className='hero-img bg-local h-full w-full'>
          <div className='flex items-center'>
            <Navbar/>
          </div>
          <h1 className="text-gray-50 font-extrabold text-4xl drop-shadow-3xl text-center md:text-4xl lg:text-5xl">GITAM AERO ASTRO CLUB</h1>
        </div>
      </div>

      <div className='flex'>
        <p className='text-gray-50 text-[1.3125rem] font-bold text-left mt-10 lg:text-[1.875rem]'>Events</p>
        <Carousel/>
      </div>

      <div className='flex flex-col'>
        <h1 className='text-gray-50 font-bold lg:text-[1.875rem] md:text-[1.313rem] sm:text-[1.313rem]'>Executive Body</h1>
        <p className='text-gray-50 lg:text-[1.125rem] md:text-[1.125rem] sm:text-[1.00rem] mt-8'>The Gitam Aero Astro Club was established in Nov 2020. We aim at upholding the cognitive aspect of education by ensuring academic excellence and intellectual growth of its students.</p>
        <span className='mt-12 justify-center'>
          <Carousel_team/>
        </span>
      </div>

      <div className='flex'>
        <p className='text-gray-50 text-[1.3125rem] font-bold text-left mt-10 lg:text-[1.875rem]'>Gallery</p>
        <div className='flex flex-row w-full my-8 overflow:auto'>
          <Gallery/>
        </div>
      </div>

      <footer className='flex flex-row justify-evenly bg-black w-full lg:pt-15% lg:pb-15% md:pt-10% md:pb-5% sm:pt-10% sm:pb-5%'>
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
  );
}
