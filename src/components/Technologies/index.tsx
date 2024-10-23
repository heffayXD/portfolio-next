import Icons from '@/components/Icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const experienceArr = [
  {
    title: 'Languages',
    list: ['JavaScript', 'TypeScript', 'PHP', 'Python']
  },
  {
    title: 'Frontend',
    list: ['React', 'Next.js', 'Sass', 'Tailwind CSS', 'Vue', 'Nuxt.js', 'Hydrogen']
  },
  {
    title: 'Backend',
    list: ['Node.js', 'Express', 'Laravel', 'GraphQL', 'SQL & NoSQL', 'Serverless']
  },
  {
    title: 'Services',
    list: ['Shopify', 'AWS', 'Vercel', 'Nacelle', 'Square', 'Sanity', 'PACK Digital']
  }
]

const Technologies = () => {
  return (
    <div
      id='technologies'
      className='relative overflow-hidden py-12'
    >
      <h1 className='text-4xl text-center w-full font-bold mb-16 font-montserrat'>
        Technologies
      </h1>
      <Icons />
      <div className='flex justify-around flex-wrap w-full px-10 mb-16'>
        {experienceArr.map(({ title, list }) => (
          <div
            className='m-3 mt-6 p-3 flex justify-center flex-wrap'
            key={`experience-${title}`}
          >
            <h3 className='w-full text-center mb-3 text-3xl font-bold font-montserrat'>
              {title}
            </h3>
            <ul>
              {list.map(item => (
                <li
                  className='text-xl'
                  key={`experience-item-${title}-${item}`}
                >
                  <span className='w-4 h-4 inline-block mr-2'>
                    <FontAwesomeIcon icon={faCheck} />
                  </span>{item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className='text-center'>
        ...and more
      </p>
    </div>
  )
}

export default Technologies
