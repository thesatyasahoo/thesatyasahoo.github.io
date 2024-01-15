import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/satya_sahoo.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Satyabrata Sahoo's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Satyabrata Sahoo.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg text-justify">
        Dynamic and results-driven MERN stack developer with 4. years of comprehensive experience in designing,
        implementing, and deploying cutting-edge web applications. Proficient in React, React-Native, Angular, Node.js,
        Nest.js, and Next.js, with a strong focus on delivering scalable solutions. Demonstrated expertise in cloud
        technologies, specializing in Azure and AWS, including successful EC2 instance deployments and Heroku
        integrations. My skill set encompasses advanced authentication mechanisms, utilizing Azure Authentication and
        JWT authentication, ensuring robust security protocols. I bring a wealth of experience in enhancing user
        interaction through the seamless integration of mail and SMS functionalities. Well-versed in version control
        with Git, I am accustomed to collaborating in agile environments using Jira, ensuring efficient project
        management and delivery. My proficiency in JavaScript and TypeScript, coupled with extensive database knowledge
        in MongoDB and MySQL, allows me to create versatile and high-performance applications. I am committed to staying
        ahead of industry trends and adopting best practices to deliver innovative solutions. With a solid foundation in
        software development, cloud technologies, and agile methodologies, I am eager to contribute my skills to dynamic
        and forward-thinking teams.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Use this bio section as your way of describing yourself and saying what you do, what technologies you like
  to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing
  in.`,
  aboutItems: [
    {label: 'Location', text: 'Bangalore, India', Icon: MapIcon},
    {label: 'Age', text: '29', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Interests', text: 'Motorcycles, Gamming, Touring', Icon: SparklesIcon},
    {label: 'Study', text: 'Fakir Mohan University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Tata Consultancy Services', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Hindi',
        level: 4,
      },
      {
        name: 'Odia',
        level: 3,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'Angular',
        level: 6,
      },
      {
        name: 'Next Js',
        level: 7,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Nest Js',
        level: 5,
      },
      {
        name: 'Django(Python)',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Ionic',
        level: 4,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: '#',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: '#',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: '#',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: '#',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: '#',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: '#',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: '#',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: '#',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: '#',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: '#',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: '#',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2018',
    location: 'Fakir Mohan University',
    title: "Bachlor's Degree Of Computer Science",
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: 'April 2014',
    location: 'Velavumi Mahavidyalaya',
    title: 'What did you study 101',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: '26th October 2022 - Present',
    location: 'Tata Consultancy Services',
    title: 'System Engineer',
    content: (
      <p style={{textAlign: 'justify'}}>
        • Played a key role in designing and developing large-scale software systems, meeting, and exceeding customer
        expectations <br /> • Applied strong computer science skills to ensure the scalability, maintainability, and
        efficiency of the UI layer.
        <br /> • Collaborated with cross-functional teams to uphold coding standards, conduct code reviews, and manage
        source control effectively. <br /> • Leveraged knowledge of professional software engineering best practices
        throughout the software development life cycle. <br /> • Successfully resolved real-time troubleshooting
        scenarios, ensuring smooth application performance.
        <br /> • Integrated Azure SSO login for enhanced security measures, contributing to a robust authentication
        process.
      </p>
    ),
  },
  {
    date: '8th April 2019 - 25th October 2022',
    location: 'Right Avenue Infotech Pvt Ltd',
    title: 'Software Developer',
    content: (
      <p style={{textAlign: 'justify'}}>
        • Spearheaded the development of single-page HTML5 applications using React, consistently delivering
        high-quality, responsive user interfaces. <br /> • Applied proficient UI patterns and techniques, resolving
        common UI problems to enhance user experience. <br /> • Demonstrated expertise in RESTful API design,
        collaborating closely with backend teams to create seamless web applications. <br /> • Engaged in Test-Driven
        Development (TDD) with a focus on unit and integration tests, employing mocking and stubbing techniques for
        efficient testing processes. <br /> • Utilized solid understanding of software design patterns to refactor and
        simplify complex code, optimizing overall system performance. <br /> • Actively participated in Agile
        environments, contributing to the iterative development process, and ensuring timely project deliveries. <br />{' '}
        • Implemented CI/CD pipeline build processes using Azure DevOps, streamlining development workflows, and
        enhancing deployment efficiency.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'thesatyabratasahoo@gmail.com',
      href: 'mailto:thesatyabratasahoo@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Bangalore, India',
      href: 'https://www.google.ca/maps/place/Bangalore,India/@12.987589078721705, 77.77067266187605,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@thesatyasahoo',
      href: 'https://www.instagram.com/satyasahoo1994/',
    },
    {
      type: ContactType.Github,
      text: 'thesatyasahoo',
      href: 'https://github.com/thesatyasahoo',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/thesatyasahoo'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/1994-satyabrata-sahoo/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/satyasahoo1994/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/SATYABRATA525'},
];
