import AisinLogo from '$lib/images/aisin/aisin_logo.ico';
import ClimbalyticsLogo from '$lib/images/climbalytics/climbalyticsIcon.png';
import GovReadyLogo from '$lib/images/govready/govreadyIcon.png';
import RegScaleLogo from '$lib/images/regscale/regscaleIcon.png';

export const identity = {
  name: 'Sergio Falcon',
  title: 'Full Stack Developer',
  tagline: 'Rock Climber',
  location: 'Knoxville, TN'
};

export const bio: string[] = [
  "I'm Sergio, a full stack developer and rock climber. Originally from Austin, TX; currently residing in Knoxville, TN. I graduated from the University of Texas at San Antonio with a Master's in Computer Science with a concentration in Software Engineering. I have a passion for creating, learning new technologies and developing apps. I'm aspiring to be a founder of my very own company to develop a variety of applications.",
  "I've been climbing for over 10 years. I've competed in local and regional competitions and have set routes for local climbing gyms. I'm currently working on developing a climbing app to help climbers track their progress and share their climbing experiences. Some achievements in climbing: V13, 5.14a.",
  "I'm always looking for new opportunities to learn and grow as a developer and climber. Feel free to reach out if you have any questions or would like to collaborate on a project."
];

export type Job = {
  image: string;
  company: string;
  initials: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  url: string;
};

export const work: Job[] = [
  {
    image: AisinLogo,
    company: 'Aisin',
    initials: 'AI',
    title: 'Software Developer',
    description:
      'Building internal factory operations software including TPDA systems, inventory management, machine monitoring, and computer vision pipelines.',
    startDate: 'Nov 2023',
    endDate: 'Present',
    url: 'https://www.aisin.com'
  },
  {
    image: RegScaleLogo,
    company: 'RegScale Inc.',
    initials: 'RS',
    title: 'Full Stack Developer',
    description: "Developed and maintained the company's web application.",
    startDate: 'Nov 2022',
    endDate: 'Nov 2023',
    url: 'https://www.regscale.com'
  },
  {
    image: GovReadyLogo,
    company: 'GovReady LLC.',
    initials: 'GR',
    title: 'Full Stack Developer',
    description: "Developed and maintained the company's web application.",
    startDate: 'Sept 2021',
    endDate: 'Nov 2022',
    url: 'https://www.govready.com'
  },
  {
    image: ClimbalyticsLogo,
    company: 'Climbalytics LLC.',
    initials: 'CA',
    title: 'Jr Software Developer',
    description: "Developed and maintained the company's web application.",
    startDate: 'Sept 2017',
    endDate: 'Dec 2017',
    url: 'https://www.climbalytics.com'
  }
];
