'use client'
import { useState, useRef, ReactNode } from 'react'
import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faWindows, faAndroid, faNpm } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

import { useScroll } from '@/hooks/scroll'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

type Link = {
  url: string,
  title: string,
  download: boolean,
  icon: string,
}

type CardProps = {
  title: string,
  children: ReactNode,
  technologies: string[],
  links: Link[],
  image: StaticImport | null,
  imageAlt: string,
  reverse: boolean
}

const Card = ({ title = '', children, technologies = [], links = [], image = null, imageAlt = '', reverse = false }: CardProps) => {
  const [show, setShow] = useState(false)
  const refContainer = useRef<HTMLInputElement>(null)

  useScroll(() => {
    if (!refContainer.current) return
    const top = refContainer.current.getBoundingClientRect().top
    if (top < (window.innerHeight - (window.innerHeight / 3))) {
      setShow(true)
    }
  })

  const getIcon = (icon: string) => {
    const icons = {
      github: faGithub,
      website: faExternalLinkAlt,
      windows: faWindows,
      android: faAndroid,
      npm: faNpm,
    }

    return icons[icon as keyof typeof icons] || (<></>)

  }

  return (
    <div className={`max-w-[1200px] mx-auto mt-4 mb-4 w-full md:flex md:justify-center md:items-center ${reverse ? 'md:flex-row-reverse' : ''}`}>
      <div
        className={`md:shadow-lg md:rounded-xl md:border md:p-10 md:text-left p-4 m-3 transition-all text-center ${image !== null ? 'md:w-[50%]' : 'w-full'} ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        ref={refContainer}
      >
        <h2 className='mb-4 text-2xl font-semibold font-montserrat'>
          {title}
        </h2>
        <div className='mb-4'>
          {children}
        </div>
        <h3 className='text-xl font-semibold font-montserrat'>
          Technologies
        </h3>
        <p>{technologies.join(', ')}</p>
        <div className='mt-4'>
          {links.map((link, index) => (
            <a
              href={link.url}
              target='_blank'
              title={link.title}
              download={link.download}
              rel='noopener noreferrer'
              className='mr-4 text-3xl'
              key={`link-${title}-${index}`}
            >
              <FontAwesomeIcon icon={getIcon(link.icon)} />
            </a>
          ))}
          </div>
      </div>
      {
        image !== null && (
          <div className='text-center p-3 md:w-[50%] w-full'>
            <Image
              className='w-full max-h-[400px] object-contain'
              src={image}
              alt={imageAlt}
            />
          </div>
        )
      }
    </div>
  )
}

export default Card
