import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
  return (
    <div id='home' className='section container mx-auto max-w-[1200px] px-2 items-center'>
      <div className="relative w-fit mx-auto ml-3">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full -z-10 scale-150 "
        >
          <path
            fill="#FF0066"
            d="M51,-53.4C60.9,-41.1,60.3,-20.5,60.1,-0.2C59.9,20.2,60.2,40.3,50.3,49.4C40.3,58.4,20.2,56.2,1.9,54.3C-16.4,52.4,-32.8,50.8,-47.2,41.8C-61.7,32.8,-74.3,16.4,-72.8,1.5C-71.3,-13.4,-55.7,-26.8,-41.3,-39.1C-26.8,-51.5,-13.4,-62.8,3.6,-66.3C20.5,-69.9,41.1,-65.8,51,-53.4Z"
            transform="translate(100 100)"
          />
        </svg>

        <img src="/images/ridho.png" data-aos="fade-right" data-aos-easing="ease-in-sine" alt="Profile" className="relative w-full h-auto" />
      </div>


      <div className='w-full'>
        <div className='block text-center font-secondary font-black text-[30px]'>
          Hello, Im
          <div>
            <TypeAnimation
              sequence={[
                'Web Developer',
                1000,
                'Software Engineer',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className='ml-3 text-secondary'
            />
          </div>
        </div>
        <div className="w-full flex justify-center">
          <a
            href={encodeURI("/Cv Ridho Ilham.pdf")}
            type="application/pdf"
            download="CV Ridho Ilham Dwi.pdf"
            className="mt-6 px-6 py-2 border-2 border-secondary text-secondary rounded-lg hover:bg-secondary hover:text-white transition"
          >
            Resume CV
          </a>
        </div>

      </div>
    </div>
  )
}

export default Banner
