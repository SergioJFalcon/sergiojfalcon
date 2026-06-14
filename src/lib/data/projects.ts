import Climbalytics3 from '$lib/images/climbalytics/calendar.png';
import ClimbalyticsLogo from '$lib/images/climbalytics/climbalyticsIcon.png';
import Climbalytics1 from '$lib/images/climbalytics/dashboard.jpeg';
import Climbalytics2 from '$lib/images/climbalytics/recent_sessions.jpeg';
import GovReadyLogo from '$lib/images/govready/govreadyIcon.png';
import Regscale1 from '$lib/images/regscale/regscale1.png';
import RegScaleLogo from '$lib/images/regscale/regscaleIcon.png';

export type ProjectLink = { name: string; url: string };
export type ProjectImage = { name: string; src: string };
export type ProjectJob = { title: string; description: string; start: string; end: string };

export type Project = {
  name: string;
  description: string;
  company?: string;
  logo: string;
  initials: string;
  techstack: string[];
  links: ProjectLink[];
  images: ProjectImage[];
  job?: ProjectJob;
};

export const portfolio: Project[] = [
  {
    name: 'ClimbTrainer',
    description:
      'A climbing training app that generates personalized training programs tailored to the individual athlete. The program adapts dynamically as the climber progresses - or faces setbacks like injuries - keeping training effective and realistic at every stage.',
    company: 'ClimbTrainer',
    logo: '',
    initials: 'CT',
    techstack: ['SvelteKit', 'Axum', 'TypeScript', 'Rust', 'PostgreSQL', 'Redis'],
    links: [{ name: 'climbtrainer.app', url: 'https://climbtrainer.app/' }],
    images: []
  },
  {
    name: 'DCM Monitor',
    description:
      'Internal factory application for monitoring die-cast machine camera feeds captured every few seconds, enabling operators to detect slag and debris buildup inside the machines. When overflow is identified, the system alerts the appropriate personnel to reduce the risk of the slag igniting. Also includes a data labeling pipeline for tagging slag images with bounding boxes to train a YOLO computer vision model for automated detection.',
    company: 'Aisin',
    logo: '',
    initials: 'DM',
    techstack: ['Svelte', 'FastAPI', 'TypeScript', 'Python', 'SQLite', 'YOLOv12'],
    links: [],
    images: []
  },
  {
    name: 'AACT Web Application',
    description:
      'Main internal web platform for Aisin factory operations, housing several integrated modules: a TPDA system that replaced a costly legacy application, a role-based inventory and checkout system managing 43,000+ items across multiple locations, a cleanroom sensor monitoring dashboard with real-time gauge displays, a tools budget performance tracker, and production analytics. Integrates a variety of smart lights such as LIFX on the factory floor machines send status requests to the application, which updates light states, fires production events, and tracks output counts. Includes a robust background notification service with scheduled delivery and automated retry.',
    company: 'Aisin',
    logo: '',
    initials: 'AACT',
    techstack: ['Vue', '.NET Core', 'TypeScript', 'MySQL', 'Quartz.NET'],
    links: [],
    images: []
  },
  {
    name: 'GRC Platform Tool ',
    description:
      "GRC platform tool that will streamline an organization's compliance journey by digitizing compliance artifacts into a digital system of record, automating existing security and compliance tools to keep compliance documentation continuously up to date, transform existing records to output to both human and machine-readable formats, and lastly scale any environment with tenants for every business unit with enterprise reporting across the organization in your Business Intelligence platform of choice.",
    job: {
      title: 'Full Stack Developer',
      description:
        'Developed on the main GRC tool, specifically on a variety of features such as Policy Template Editor, Job scheduler using airflow, and ensuring Web Accessibility coverage. Worked on the front-end using Angular and back-end using .NET and Python.',
      start: '2022-11-11',
      end: '2023-11-12'
    },
    company: 'RegScale',
    logo: RegScaleLogo,
    initials: 'RS',
    techstack: [
      'Angular',
      '.NET Core',
      'Python',
      'MySQL',
      'TypeScript',
      'Docker',
      'Azure',
      'HTML5',
      'CSS',
      'Kendo UI',
      'SyncFusion'
    ],
    links: [
      { name: 'RegScale', url: 'https://www.regscale.com' },
      { name: 'Demo', url: 'https://dev.regscale.io/login' }
    ],
    images: [{ name: 'RegScale Home Page', src: Regscale1 }]
  },
  {
    name: 'GovReady',
    description:
      'An open source, self-service GRC tool to automate security assessments and compliance.',
    job: {
      title: 'Full Stack Developer',
      description: 'Worked on the front-end using React and back-end Django and Python.',
      start: '2021-09-03',
      end: '2022-11-11'
    },
    logo: GovReadyLogo,
    initials: 'GR',
    company: 'GovReady',
    techstack: ['React', 'Django', 'Python', 'Docker', 'PostgreSQL', 'Material UI'],
    links: [{ name: 'GovReady', url: 'https://govready.com/' }],
    images: []
  },
  {
    name: 'Climbalytics',
    description:
      "Climbing app that utilizes a bluetooth device to track a user's climbing session.",
    job: {
      title: 'Software Developer',
      description:
        'Worked on the climbalytics app using React Native and the marketing site using React.',
      start: '2021-09-03',
      end: '2022-11-11'
    },
    logo: ClimbalyticsLogo,
    initials: 'CA',
    company: 'Climbalytics',
    techstack: ['React', 'React Native', 'Docker', 'PostgreSQL'],
    images: [
      { name: 'Dashboard', src: Climbalytics1 },
      { name: 'Recent Sessions', src: Climbalytics2 },
      { name: 'Calendar', src: Climbalytics3 }
    ],
    links: []
  }
];
