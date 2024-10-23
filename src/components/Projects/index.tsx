import Card from '@/components/Card'
import pictureCropImg from '@/images/picturecrop.jpg'
import reencryptImg from '@/images/reencrypt.png'
import trackpadImg from '@/images/trackpad.jpg'

const cards = [
  {
    title: 're:Encrypt',
    body: (<p>re:Encrypt is a password manager application that encrypts your usernames and passwords locally before syncing them between your devices, preventing the risk of data loss.</p>),
    technologies: [
      'Node',
      'React',
      'Redux',
      'Electron',
      'React Native'
    ],
    links: [],
    image: reencryptImg,
    imageAlt: 're:Encrypt Desktop and Mobile Applications'
  },
  {
    title: 'TrackPad',
    body: (<p>TrackPad allows you to connect to a computer on your local network using your phone to control the mouse and type on the keyboard. This is done by starting up the application on your computer, then connecting through the mobile application.</p>),
    technologies: [
      'React Native',
      'React JS',
      'Electron',
      'Node JS'
    ],
    links: [
      {
        url: 'https://github.com/heffayXD/trackpad-server',
        title: 'Desktop Github',
        icon: 'github',
        download: false
      },
      {
        url: '/downloads/TrackPad-Server-Setup-0.1.0.exe',
        title: 'Windows Download',
        icon: 'windows',
        download: true
      },
      {
        url: 'https://github.com/heffayXD/trackpad-mobile',
        title: 'Mobile Github',
        icon: 'github',
        download: false
      },
      {
        url: '/downloads/trackpad-0.1.0.apk',
        title: 'Android SDK Download',
        icon: 'android',
        download: true
      }
    ],
    image: trackpadImg,
    imageAlt: 'TrackPad Application'
  },
  {
    title: 'React Picture Crop',
    body: (<p>A React component library that allows a user to resize an uploaded picture to your specifications. This component handles the upload, resizing, magnification, and base 64 encoding of the result for you.</p>),
    technologies: [
      'React JS'
    ],
    'links': [
      {
        url: 'https://github.com/heffayXD/react-picture-crop',
        title: 'Github',
        icon: 'github',
        download: false
      },
      {
        url: 'https://www.npmjs.com/package/@heffayxd/react-picture-crop',
        title: 'NPM',
        icon: 'npm',
        download: false
      }
    ],
    image: pictureCropImg,
    imageAlt: 'Picture Crop Library'
  }
]

const Projects = () => {
  return (
    <div id='projects' className='bg-white text-primary py-12'>
      <h1 className='text-4xl text-center w-full font-bold mb-16 font-montserrat'>
        Past Projects
      </h1>
      <div>
        {cards.map(({ title, body, technologies, links, image, imageAlt, }, index) => (
          <Card
            title={title}
            technologies={technologies}
            links={links}
            image={image}
            imageAlt={imageAlt}
            key={`project-card-${title}`}
            reverse={index % 2 != 0}
          >
            {body}
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Projects
