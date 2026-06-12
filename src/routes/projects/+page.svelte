<script lang="ts">
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import { techGroups as allTechGroups } from '$lib/techColors';

  import Climbalytics3 from '$lib/images/climbalytics/calendar.png';
  import ClimbalyticsLogo from '$lib/images/climbalytics/climbalyticsIcon.png';
  import Climbalytics1 from '$lib/images/climbalytics/dashboard.jpeg';
  import Climbalytics2 from '$lib/images/climbalytics/recent_sessions.jpeg';
  import GovReadyLogo from '$lib/images/govready/govreadyIcon.png';
  import Regscale1 from '$lib/images/regscale/regscale1.png';
  import RegScaleLogo from '$lib/images/regscale/regscaleIcon.png';

  let selectedTechs = $state(new Set<string>());

  const portfolio = [
    {
      name: "ClimbTrainer",
      description: "A climbing training app that generates personalized training programs tailored to the individual athlete. The program adapts dynamically as the climber progresses — or faces setbacks like injuries — keeping training effective and realistic at every stage.",
      company: "ClimbTrainer",
      logo: "",
      initials: "CT",
      techstack: ["SvelteKit", "Axum", "TypeScript", "Rust", "PostgreSQL", "Redis"],
      links: [
        {
          name: "climbtrainer.app",
          url: "https://climbtrainer.app/"
        }
      ],
      images: []
    },
    {
      name: "DCM Monitor",
      description: "Internal factory application for monitoring die-cast machine camera feeds captured every few seconds, enabling operators to detect slag and debris buildup inside the machines. When overflow is identified, the system alerts the appropriate personnel to reduce the risk of the slag igniting. Also includes a data labeling pipeline for tagging slag images with bounding boxes to train a YOLO computer vision model for automated detection.",
      company: "Aisin",
      logo: "",
      initials: "DM",
      techstack: ["Svelte", "FastAPI", "TypeScript", "Python", "SQLite", "YOLOv12"],
      links: [],
      images: []
    },
    {
      name: "AACT Web Application",
      description: "Main internal web platform for Aisin factory operations, housing several integrated modules: a TPDA system that replaced a costly legacy application, a role-based inventory and checkout system managing 43,000+ items across multiple locations, a cleanroom sensor monitoring dashboard with real-time gauge displays, a tools budget performance tracker, and production analytics. Integrates with LIFX smart lights on the factory floor — machines send status requests to the application, which updates light states, fires production events, and tracks output counts. Includes a robust background notification service with scheduled delivery and automated retry.",
      company: "Aisin",
      logo: "",
      initials: "AACT",
      techstack: ["Vue", ".NET Core", "TypeScript", "MySQL", "Quartz.NET"],
      links: [],
      images: []
    },
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
      company: "GovReady",
      techstack: [
        "React",
        "Django",
        "Python",
        "Docker",
        "PostgreSQL",
        "Material UI"
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

  const techGroups = (() => {
    const present = new Set(portfolio.flatMap((p) => p.techstack));
    return allTechGroups
      .map((g) => ({ ...g, techs: g.techs.filter((t) => present.has(t)) }))
      .filter((g) => g.techs.length > 0);
  })();

  const filtered = $derived(
    selectedTechs.size === 0
      ? portfolio
      : portfolio.filter((p) => p.techstack.some((t) => selectedTechs.has(t)))
  );

  function toggleTech(tech: string) {
    const next = new Set(selectedTechs);
    next.has(tech) ? next.delete(tech) : next.add(tech);
    selectedTechs = next;
  }
  
</script>

<svelte:head>
  <title>Projects</title>
  <meta name="description" content="Projects by Sergio Falcon" />
</svelte:head>

<section class="mx-auto flex w-full flex-col py-10">
  <div class="font-term mb-2 text-sm text-(--term-muted)">
    <span class="text-(--term-green)">sergio@falcon</span>:<span class="text-(--term-amber)">~/projects</span>$
    ls -la
  </div>
  <h1
    class="glow-green mb-8 text-left font-term text-4xl font-bold tracking-tight text-(--term-green) lowercase"
  >
    ./projects
  </h1>
  <div class="mb-6 flex flex-col gap-3">
    <div class="flex items-center justify-between">
      <span class="term-rule w-full text-(--term-muted)">// filter by techstack</span>
      {#if selectedTechs.size > 0}
        <button
          onclick={() => (selectedTechs = new Set())}
          class="font-term ml-4 shrink-0 cursor-pointer rounded border border-(--term-border) px-2 py-0.5 text-xs text-(--term-muted) transition-all duration-150 hover:border-red-500/50 hover:text-red-400"
        >
          ✕ clear
        </button>
      {/if}
    </div>
    {#each techGroups as group (group.label)}
      <div class="flex flex-wrap items-center gap-2">
        <span
          class="font-term w-36 shrink-0 text-xs"
          style="color: {group.color}"
        >{group.label}</span>
        {#each group.techs as tech (tech)}
          {@const active = selectedTechs.has(tech)}
          <button
            onclick={() => toggleTech(tech)}
            class="font-term cursor-pointer rounded border px-2 py-0.5 text-xs transition-all duration-150
              {active ? '' : 'border-(--term-border) bg-transparent text-(--term-muted) hover:text-(--term-text)'}"
            style={active
              ? `border-color: ${group.color}; color: ${group.color}; background-color: ${group.color}22`
              : ''}
          >
            {tech}
          </button>
        {/each}
      </div>
    {/each}
  </div>

  <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
    {#each filtered as project (project.name)}
      <ProjectCard {project} />
    {/each}
  </div>
</section>