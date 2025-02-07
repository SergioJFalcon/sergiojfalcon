import { For, Show } from "solid-js";
import Climbalytics3 from '../../assets/images/climbalytics/calendar.png';
import ClimbalyticsLogo from '../../assets/images/climbalytics/climbalyticsIcon.png';
import Climbalytics1 from '../../assets/images/climbalytics/dashboard.jpeg';
import Climbalytics2 from '../../assets/images/climbalytics/recent_sessions.jpeg';
import GovReadyLogo from '../../assets/images/govready/govreadyIcon.png';
import Regscale1 from '../../assets/images/regscale/regscale1.png';
import RegScaleLogo from '../../assets/images/regscale/regscaleIcon.png';

import ProjectCard from "@components/ProjectCard";

export default function ProjectsPortfolio() {
  const portfolio = [
    {
      name: "GRC Platform Tool ",
      description: "GRC platform tool that will streamline an organization's compliance journey by digitizing compliance artifacts into a digital system of record, automating existing security and compliance tools to keep compliance documentation continuously up to date, transform existing records to output to both human and machine-readable formats, and lastly scale any environment with tenants for every business unit with enterprise reporting across the organization in your Business Intelligence platform of choice.",
      job: {
        title: "Full Stack Developer",
        description: "Developed on the main GRC tool, specifically on a variety of features such as Policy Template Editor, Job scheduler using airflow, and ensuring Web Accessibility coverage. Worked on the front-end using Angular and back-end using .NET and Python.",
        start: "2022-11-11",
        end: "2023-11-12"
      },
      company: "RegScale",
      logo: RegScaleLogo,
      initials: "RS",
      techstack: [
        "Angular",
        ".NET Core",
        "Python",
        "MySQL",
        "TypeScript",
        "Docker",
        "Azure",
        "HTML5",
        "CSS",
        "Kendo UI",
        "SyncFusion"
      ],
      links: [
        {
          name: "RegScale",
          url: "https://www.regscale.com"
        },
        {
          name: "Demo",
          url: "https://dev.regscale.io/login"
        }
      ],
      images: [
        {
          name: "RegScale Home Page",
          src: Regscale1
        }
      ]
    },
    {
      name: "GovReady",
      description: "An open source, self-service GRC tool to automate security assessments and compliance.",
      job: {
        title: "Full Stack Developer",
        description: "Worked on the front-end using React and back-end Django and Python.",
        start: "2021-09-03",
        end: "2022-11-11"
      },
      logo: GovReadyLogo,
      initials: "GR",
      company: "RegScale",
      techstack: [
        "React",
        "Django",
        "Python",
        "Docker",
        "PostgreSQL"
      ],
      links: [
        {
          name: "GovReady",
          url: "https://govready.com/"
        }
      ],
      images: []
    },
    {
      name: "Climbalytics",
      description: "Climbing app that utilizes a bluetooth device to track a user's climbing session.",
      job: {
        title: "Software Developer",
        description: "Worked on the climbalytics app using React Native and the marketing site using React.",
        start: "2021-09-03",
        end: "2022-11-11"
      },
      logo: ClimbalyticsLogo,
      initials: "CA",
      company: "Climbalytics",
      techstack: [
        "React",
        "React Native",
        "Docker",
        "PostgreSQL"
      ],
      links: [],
      images: [
        {
          name: "Dashboard",
          src: Climbalytics1
        },
        {
          name: "Recent Sessions",
          src: Climbalytics2
        },
        {
          name: "Calendar",
          src: Climbalytics3
        }
      ]
    }
  ];
  const a: string | undefined = undefined;
  return (
    <main class="container mx-auto flex flex-col w-screen">
      <h1 class="max-6-xs text-4xl text-sky-700 font-thin uppercase my-16">
      Projects
      </h1>
      <Show when={a}>
        <p>{a.toUpperCase()}</p>
      </Show>
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <For each={portfolio}>
            {(project) => (
              <ProjectCard project={project} />
            )}
          </For>
        </div>
    </main>
  );
}
