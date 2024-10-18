import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNode, faPhp, faJsSquare, faLaravel, faSass, faReact, faVuejs, faAws, faPython, faAndroid, faNpm } from '@fortawesome/free-brands-svg-icons'

const Icons = () => {
  const icons = [
    { icon: (<FontAwesomeIcon icon={faNode} />), label: 'faNode' },
    { icon: (<FontAwesomeIcon icon={faPhp} />), label: 'faPhp' },
    { icon: (<FontAwesomeIcon icon={faJsSquare} />), label: 'faJsSquare' },
    { icon: (<FontAwesomeIcon icon={faLaravel} />), label: 'faLaravel' },
    { icon: (<FontAwesomeIcon icon={faSass} />), label: 'faSass' },
    { icon: (<FontAwesomeIcon icon={faReact} />), label: 'faReact' },
    { icon: (<FontAwesomeIcon icon={faVuejs} />), label: 'faVuejs' },
    { icon: (<FontAwesomeIcon icon={faPython} />), label: 'faPython' },
    { icon: (<FontAwesomeIcon icon={faAws} />), label: 'faAws' },
    { icon: (<FontAwesomeIcon icon={faAndroid} />), label: 'faAndroid' },
    { icon: (<FontAwesomeIcon icon={faNpm} />), label: 'faNpm' }
  ]

  return (
    <div className='absolute top-12 min-w-[200%] z-10 flex justify-between items-center gap-4 animate-scroll'>
      {icons.map(({ icon, label }) => (
        <span
          className='w-12 h-12 block opacity-10'
          key={`icon-${label}-1`}
        >
          {icon}
        </span>
      ))}
      {icons.map(({ icon, label }) => (
        <span
          className='w-12 h-12 block opacity-10'
          key={`icon-${label}-2`}
        >
          {icon}
        </span>
      ))}
    </div>
  )
}

export default Icons
