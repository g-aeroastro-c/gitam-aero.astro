import Link from "next/link";
import Image from "next/image";



<footer className='flex flex-wrap justify-evenly bg-black w-full lg:pt-[15%] lg:pb-[15%] md:pt-[10%] md:pb-[5%] sm:pt-[10%] sm:pb-[5%]'>
  <div className='lg:pr-4 md:pr-3 sm:pr-2'>
   {/* <Image src={gaac} alt='Gaac logo' width={305} height={120} /> */}
  </div>
  <div className='text-slate-50'>
    <h2 className='font-bold lg:text-[1.5625rem] pb-5 md:text-[1.2625rem] sm:text-[1rem]'>QUICK LINKS</h2>
    <ul className='font-extralight lg:text-[1.4625rem] md:text-[1.2625rem] sm:text-[1rem]'>
      <li className='pb-4'><Link href='#'>Home</Link></li>
      <li className='pb-4'><Link href='#'>About Us</Link></li>
      <li className='pb-4'><Link href='#'>Sponsor Us</Link></li>
      <li className='pb-4'><Link href='#'>Careers</Link></li>
    </ul>
  </div>
  <div className='text-slate-50'>
    <h2 className='font-bold lg:text-[1.5625rem] pb-5 md:text-[1.2625rem] sm:text-[1rem]'>TEAMS</h2>
    <ul className='font-extralight lg:text-[1.4625rem] md:text-[1.2625rem] sm:text-[1rem]'>
      <li className='pb-4'><Link href='#'>Executive Body</Link></li>
      <li className='pb-4'><Link href='#'>Core Team</Link></li>
      <li className='pb-4'><Link href='#'>SSG</Link></li>
      <li className='pb-4'><Link href='#'>Robusta</Link></li>
    </ul>
  </div>
  <div className='text-slate-50'>
    <h2 className='font-bold lg:text-[1.5625rem] pb-5 md:text-[1.2625rem] sm:text-[1rem]'>EVENTS</h2>
    <ul className='font-extralight lg:text-[1.4625rem] md:text-[1.2625rem] sm:text-[1rem]'>
      <li className='pb-4'><Link href='#'>Rocketry 101</Link></li>
      <li className='pb-4'><Link href='#'>Rocketry 2.0</Link></li>
      <li className='pb-4'><Link href='#'>Diana’s Eve</Link></li>
      <li className='pb-4'><Link href='#'>FrostHack 2k23</Link></li>
      <li className='pb-4'><Link href='#'>Sangharsh</Link></li>
      <li className='pb-4'><Link href='#'>Cinematic Soiree</Link></li>
      <li className='pb-4'><Link href='#'>Lunar Odyssey</Link></li>
    </ul>
  </div>
  <div className='text-slate-50'>
    <h2 className='font-bold lg:text-[1.5625rem] pb-5 md:text-[1.2625rem] sm:text-[1rem]'>CONTACT US</h2>
    <ul className='font-extralight lg:text-[1.4625rem] md:text-[1.2625rem] sm:text-[1rem] flex items-center pb-4'>
      <li className='lg:pr-4 md:pr-3 sm:pr-2'>
        {/* <Image src={mail} alt='Mail logo' width={40} height={40} /> */}
      </li>
      <li className='pb-4'>
        Email<br />
        <Link href='mailto:aeroastro_vzg@gitam.in'><span className='underline decoration-solid'>aeroastro_vzg@gitam.in</span></Link>
      </li>
    </ul>
    <ul className='font-extralight lg:text-[1.4625rem] md:text-[1.2625rem] sm:text-[1rem] flex items-center pb-4'>
      <li className='lg:pr-4 md:pr-3 sm:pr-2'>
         {/*<Image src={linkedin} alt='Linkedin logo' width={40} height={40} /> */}
      </li>
      <li className='pb-4'>
        LinkedIn<br />
        <Link href='https://www.linkedin.com/'><span className='underline decoration-solid'>GITAM Aero Astro Club</span></Link>
      </li>
    </ul>
  </div>
  <div className='text-slate-50'>
    <h2 className='font-bold lg:text-[1.5625rem] pb-5 md:text-[1.2625rem] sm:text-[1rem]'>SOCIAL MEDIA</h2>
    <ul className='font-extralight lg:text-[1.4625rem] md:text-[1.2625rem] sm:text-[1rem] flex items-center pb-4'>
      <li className='lg:pr-4 md:pr-3 sm:pr-2'>
        {/* <Image src={insta} alt='Instagram logo' width={40} height={40} /> */}
      </li>
      <li className='pb-4'>
        Instagram<br />
        <Link href='https://www.instagram.com/'><span className='underline decoration-solid'>g.aeroastro</span></Link>
      </li>
    </ul>
  </div>
</footer>
