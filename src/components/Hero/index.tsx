import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import heroImage from '@/images/hero.jpg'

const navigation = [
  { label: 'About', id: '#about' },
  { label: 'Technologies', id: '#technologies' },
  { label: 'Experience', id: '#experience' },
  { label: 'Past Projects', id: '#projects' },
  { label: 'Contact', id: '#contact' }
]

const Hero = () => {
  return (
    <div className='relative min-h-[100vh] text-center bg-black text-white flex flex-wrap lg:justify-start lg:items-start justify-center items-center overflow-hidden'>
      <div className='w-full lg:text-right lg:mr-24 lg:mt-24 md:text-3xl md:p-0 p-4 z-10'>
        <h1 className='text-5xl font-bold font-montserrat mb-4'>
          Full Stack Development
        </h1>
        <div className='inline-flex gap-6'>
          <a
            className='block w-8 h-8 opacity-60 hover:opacity-100 transition-opacity'
            href='https://github.com/heffayXD'
            target='_blank'
            rel='noopener noreferrer'
            title='Github'
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            className='block w-8 h-8 opacity-60 hover:opacity-100 transition-opacity'
            href='/downloads/Resume.pdf'
            target='_blank'
            rel='nofollow'
            title='Resume'
            download
          >
            <FontAwesomeIcon icon={faFilePdf} />
          </a>
        </div>
      </div>
      <div className='font-medium lg:text-left text-2xl center lg:absolute left-24 bottom-24 md:block hidden z-10'>
        <h2 className='font-montserrat font-bold'>
          Navigation
        </h2>
        {navigation.map(({ label, id }) => (
          <a
            className='block opacity-60 hover:opacity-100 transition-opacity font-montserrat'
            key={`navigation-${id}`}
            href={id}
          >
            {label}
          </a>
        ))}
      </div>
      <div className='absolute z-0 h-full w-full'>
        <div className='lg:block hidden absolute top-0 right-0 top-block border-w z-10'></div>
        <div className='lg:block hidden absolute bottom-0 left-0 bottom-block border-w z-10'></div>
        <Image
          className='opacity-30 lg:blur-[1px] blur-[2px] h-full w-auto min-w-full object-cover'
          src={heroImage}
          alt='Code'
        />
      </div>
    </div>
  )
}

export default Hero
