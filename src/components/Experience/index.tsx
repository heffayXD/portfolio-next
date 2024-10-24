import Card from '@/components/Card'

const cards = [
  {
    title: 'Scoutside / Bear Group',
    body: (
      <p>
        <strong className='font-medium text-lg'>
          Full Stack Developer
        </strong>
        <em className='mb-2 block'>
          November 2021 - September 2024
        </em>
        <ul className='list-disc text-left'>
          <li>Built and maintained headless Shopify sites</li>
          <li>Developed custom Shopify themes and subscription portals using modern technologies</li>
          <li>Created custom Shopify apps and embedded admin interfaces</li>
          <li>Developed backend systems for businesses that would monitor subscription statuses, algorithmically determine next products, and detect issues</li>
          <li>Led website and database migrations with over 100,000 active subscribers to new subscription services and platforms</li>
          <li>Converted legacy code and created new applications through Shopify Functions and serverless frameworks</li>
        </ul>
      </p>
    ),
    technologies: [
      'Shopify',
      'Node',
      'React',
      'Vue',
      'Next.js',
      'Nuxt.js',
      'TypeScript',
      'Vercel',
      'Nacelle',
      'Hydrogen',
      'AWS',
      'Sanity',
      'Pack Digital'
    ],
    links: [
      {
        url: 'https://www.beargroup.com/',
        title: 'Bear Group',
        icon: 'website',
        download: false
      }
    ]
  },
  {
    title: 'Freelance Software Development',
    body: (
      <p>
        <strong className='font-medium text-lg'>
          Full Stack Developer
        </strong>
        <em className='mb-2 block'>
          July 2020 - November 2021
        </em>
        <ul className='list-disc text-left'>
          <li>Built custom sites for small businesses</li>
          <li>Developed a system that would generate necessary documents for importing goods</li>
          <li>Developed a custom CMS for a vehicle dealer that allowed them to control and monitor their inventory</li>
          <li>Hosted multiple sites and integrated with custom Express APIs</li>
        </ul>
      </p>
    ),
    technologies: [
      'Node',
      'React',
      'Next.js',
      'TypeScript',
      'AWS',
      'Express'
    ],
    links: []
  },
  {
    title: 'Subsync Inc',
    body: (
      <p>
        <strong className='font-medium text-lg'>
          Full Stack Developer
        </strong>
        <em className='mb-2 block'>
          September 2020 - January 2021
        </em>
        <ul className='list-disc text-left'>
          <li>Designed a frontend application for admins to manage screens throughout their business</li>
          <li>Created an Express API that would interface with network of Raspberry Pi devices</li>
          <li>Developed custom ORM to quickly manage databases</li>
          <li>Created new landing site through Next.js</li>
        </ul>
      </p>
    ),
    technologies: [
      'Node',
      'React',
      'Next.js',
      'TypeScript',
      'AWS',
      'Express',
      'Snowflake',
      'Docker'
    ],
    links: [
      {
        url: 'https://studioease.net/',
        title: 'StudioEase',
        icon: 'website',
        download: false
      }
    ]
  },
  {
    title: 'Your Design Guys',
    body: (
      <p>
        <strong className='font-medium text-lg'>
          Full Stack Developer
        </strong>
        <em className='mb-2 block'>
          October 2018 - July 2020
        </em>
        <ul className='list-disc text-left'>
          <li>Built out customer facing frontend apps using React JS and Vue</li>
          <li>Developed and maintained custom PHP plugins</li>
          <li>Used many frameworks like Laravel, Lumen, and ASP.NET</li>
          <li>Handled deployment of websites and cloud applications, managed DNS settings, and set up migrations through Azure and AWS</li>
        </ul>
      </p>
    ),
    technologies: [
      'Node',
      'React',
      'Next.js',
      'PHP',
      'AWS',
      'Express',
      'C#',
      'Azure',
      'Laravel',
      'Lumen'
    ],
    links: [
      {
        url: 'https://yourdesignguys.com/',
        title: 'Your Design Guys',
        icon: 'website',
        download: false
      }
    ]
  }
]

const Experience = () => {
  return (
    <div
      id='experience'
      className='bg-white text-primary py-12'
    >
      <h3 className='text-4xl text-center w-full font-bold mb-4 font-montserrat'>
        Experience
      </h3>
      <div>
        {cards.map(({ title, body, technologies, links }, index) => (
          <Card
            title={title}
            technologies={technologies}
            links={links}
            key={`experience-card-${title}`}
            reverse={index % 2 != 0}
            image={null}
            imageAlt=''
          >
            {body}
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Experience
