<script lang="ts">
  import { BriefcaseBusiness, Mountain } from '@lucide/svelte';
  import * as Avatar from '$lib/components/ui/avatar/index';
  import { Button } from '$lib/components/ui/button/index';
  import JobCard from '$lib/components/JobCard.svelte';
  import TermWindow from '$lib/components/TermWindow.svelte';

  import logo from '$lib/images/profile.jpg';
  import ClimbalyticsLogo from '$lib/images/climbalytics/climbalyticsIcon.png';
  import GovReadyLogo from '$lib/images/govready/govreadyIcon.png';
  import RegScaleLogo from '$lib/images/regscale/regscaleIcon.png';

  const resume = '/Sergio_Falcon_Resume.pdf';

  const history = [
    {
      image: '',
      company: 'Aisin',
      initials: 'AI',
      title: 'Software Developer',
      description: 'Building internal factory operations software including TPDA systems, inventory management, machine monitoring, and computer vision pipelines.',
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

  const climbs = {
    boulder: [
      { name: 'Tilted World', grade: 'V13', location: 'Obed, TN', date: '1/04/2026' },
      { name: 'Nine Pound Hammer', grade: 'V12', location: 'Austin, TX', date: '11/28/2023' },
      { name: 'Rumble in the Jungle', grade: 'V12', location: 'Hueco Tanks, TX', date: '2/27/2021' },
      { name: 'Tequila Sunrise Sit Start', grade: 'V12', location: 'Hueco Tanks, TX', date: '2/10/2024' },
      { name: 'Mr Big Stuff', grade: 'V11', location: 'Obed, TN', date: '3/25/2024' }
    ],
    sport: [
      { name: 'Patience Grasshopper', grade: '5.14a', location: "Reimer's Ranch, TX", date: '11/20/2021' },
      { name: 'Dreamkeeper', grade: '5.13b', location: "Reimer's Ranch, TX", date: '12/22/2018' },
      { name: 'House of Pain', grade: '5.13a', location: "Reimer's Ranch, TX", date: '10/25/2017' }
    ]
  };
</script>

<svelte:head>
  <title>About</title>
  <meta name="description" content="About Sergio Falcon" />
</svelte:head>

<div id="aboutme" class="min-h-full w-full py-8">
  <!-- Identity banner -->
  <div class="font-term mb-3 text-sm text-(--term-muted)">
    <span class="text-(--term-green)">sergio@falcon</span>:<span class="text-(--term-amber)">~/about</span>$
    cat profile.md
  </div>

  <div class="mb-6 flex w-full items-center justify-between gap-4">
    <div class="flex items-center gap-4">
      <Avatar.Root
        class="h-28 w-28 rounded-md border border-(--term-border) shadow-[0_0_24px_rgba(86,156,214,0.15)]"
      >
        <Avatar.Image src={logo} alt="Sergio Falcon" />
        <Avatar.Fallback>SF</Avatar.Fallback>
      </Avatar.Root>
      <div>
        <h1 class="glow-green text-left text-3xl font-bold text-(--term-green) sm:text-4xl">
          Sergio Falcon
        </h1>
        <p class="font-term text-sm text-(--term-muted)">
          <span class="text-(--term-amber)">&gt;</span> Full&nbsp;Stack&nbsp;Developer
          <span class="text-(--term-muted)">//</span> Rock&nbsp;Climber
        </p>
      </div>
    </div>
    <a href={resume} target="_self" class="shrink-0">
      <Button
        class="font-term rounded-md border border-(--term-green-dim) bg-transparent text-(--term-green) hover:bg-[rgba(86,156,214,0.12)]"
      >
        ./resume.pdf
      </Button>
    </a>
  </div>

  <div class="grid grid-cols-1 gap-5 md:grid-cols-4">
    <!-- Bio -->
    <div class="md:col-span-3">
      <TermWindow title="bio.txt" bodyClass="space-y-4">
        <p class="text-(--term-text)">
          I'm Sergio, a full stack developer and rock climber. Originally from Austin, TX;
          currently residing in Knoxville, TN. I graduated from the University of Texas at San
          Antonio with a Master's in Computer Science with a concentration in Software Engineering.
          I have a passion for creating, learning new technologies and developing apps. I'm
          aspiring to be a founder of my very own company to develop a variety of applications.
        </p>
        <p class="text-(--term-text)">
          I've been climbing for over 10 years. I've competed in local and regional competitions
          and have set routes for local climbing gyms. I'm currently working on developing a
          climbing app to help climbers track their progress and share their climbing experiences.
          Some achievements in climbing:
          <span class="term-tag">V13</span> <span class="term-tag">5.14a</span>
        </p>
        <p class="text-(--term-text)">
          I'm always looking for new opportunities to learn and grow as a developer and climber.
          Feel free to reach out if you have any questions or would like to collaborate on a
          project.
        </p>
      </TermWindow>
    </div>

    <!-- Work history -->
    <div id="history" class="md:col-span-1">
      <TermWindow title="work.log">
        <h2 class="font-term mb-3 flex items-center gap-2 text-base font-bold text-(--term-green)">
          <BriefcaseBusiness class="h-4 w-4" /> work
        </h2>
        <div class="space-y-3">
          {#each history as job (job.company)}
            <JobCard work={job} />
          {/each}
        </div>
      </TermWindow>
    </div>

    <!-- Climbing ticklist -->
    <div id="climbing" class="md:col-span-4">
      <TermWindow title="ticklist.log">
        <h2
          class="font-term glow-amber mb-3 flex items-center gap-2 text-base font-bold text-(--term-amber)"
        >
          <Mountain class="h-4 w-4" /> rock_climbing
        </h2>
        <div class="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
          <div>
            <div class="term-rule mb-2 text-(--term-amber)">// boulder</div>
            {#each climbs.boulder as climb (climb.name)}
              <div class="font-term flex items-baseline gap-2 py-0.5 text-sm">
                <span class="term-tag">{climb.grade}</span>
                <span class="text-(--term-text)">{climb.name}</span>
                <span class="ml-auto text-xs text-(--term-muted)">{climb.location}</span>
              </div>
            {/each}
          </div>
          <div>
            <div class="term-rule mb-2 text-(--term-amber)">// sport</div>
            {#each climbs.sport as climb (climb.name)}
              <div class="font-term flex items-baseline gap-2 py-0.5 text-sm">
                <span class="term-tag">{climb.grade}</span>
                <span class="text-(--term-text)">{climb.name}</span>
                <span class="ml-auto text-xs text-(--term-muted)">{climb.location}</span>
              </div>
            {/each}
          </div>
        </div>
      </TermWindow>
    </div>
  </div>
</div>
