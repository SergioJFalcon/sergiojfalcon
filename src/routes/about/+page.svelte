<script lang="ts">
  import { BriefcaseBusiness, Mountain } from '@lucide/svelte';
  import * as Avatar from '$lib/components/ui/avatar/index';
  import { Button } from '$lib/components/ui/button/index';
  import JobCard from '$lib/components/JobCard.svelte';

  import logo from '$lib/images/profile.jpg';
  import ClimbalyticsLogo from '$lib/images/climbalytics/climbalyticsIcon.png';
  import GovReadyLogo from '$lib/images/govready/govreadyIcon.png';
  import RegScaleLogo from '$lib/images/regscale/regscaleIcon.png';

  const resume = '/Sergio_Falcon_Resume_v5.pdf';

  const history = [
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

<div>
  <div id="aboutme" class="min-h-full min-w-full">
    <div class="my-8 flex w-full justify-between">
      <Avatar.Root class="h-32 w-32">
        <Avatar.Image src={logo} alt="Sergio Falcon" />
        <Avatar.Fallback>SF</Avatar.Fallback>
      </Avatar.Root>
      <div class="flex items-end">
        <a href={resume} target="_self">
          <Button class="rounded-full text-xl">Resume</Button>
        </a>
      </div>
    </div>
    <div id="about" class="my-4">
      <div class="sm:grid-cols-1 md:grid md:grid-cols-4 md:gap-4">
        <div class="sm:col-span-1 md:col-span-3">
          <h1 class="text-4xl font-bold">Sergio Falcon</h1>
          <h1 class="text-2xl">Full Stack Developer | Rock Climber</h1>
          <p class="text-md my-4">
            &emsp;I'm Sergio, a full stack developer and rock climber. Originally from Austin, TX;
            currently residing in Knoxville, TN. I graduated from the University of Texas at San
            Antonio with a Master's in Computer Science with a concentration in Software Engineering.
            I have a passion for creating, learning new technologies and developing apps. I'm
            aspiring to be a founder of my very own company to develop a variety of applications.
          </p>
          <p class="text-md my-4">
            &emsp;I've been climbing for over 10 years. I've competed in local and regional
            competitions and have set routes for local climbing gyms. I'm currently working on
            developing a climbing app to help climbers track their progress and share their climbing
            experiences. Some Achievements in climbing: v12 and 5.14a
          </p>
          <p class="text-md my-4">
            &emsp;I'm always looking for new opportunities to learn and grow as a developer and
            climber. Feel free to reach out to me if you have any questions or would like to
            collaborate on a project.
          </p>
        </div>

        <div id="history" class="sm:mb-4 md:col-span-1 md:mb-4">
          <div class="rounded-md border">
            <h1 class="mx-4 mt-4 flex items-center text-xl font-bold">
              <BriefcaseBusiness class="mx-2 mt-1" />Work
            </h1>
            {#each history as job (job.company)}
              <div class="p-4">
                <JobCard work={job} />
              </div>
            {/each}
          </div>
        </div>
        <div class="col-span-3"></div>
        <div id="climbing" class="col-span-1 sm:mb-2">
          <div class="rounded-md border">
            <h1 class="mx-4 mt-4 flex items-center text-xl font-bold">
              <Mountain class="mx-2 mt-1" />Rock Climbing
            </h1>
            <div class="w-full rounded-lg p-4 shadow">
              <h4 class="text-lg font-semibold tracking-tight">Boulder</h4>
              {#each climbs.boulder as climb (climb.name)}
                <h5 class="ml-2 text-sm font-semibold tracking-tight">
                  {climb.grade} - {climb.name}
                </h5>
              {/each}
              <h4 class="text-lg font-semibold tracking-tight">Sport</h4>
              {#each climbs.sport as climb (climb.name)}
                <h5 class="ml-2 text-sm font-semibold tracking-tight">
                  {climb.grade} - {climb.name}
                </h5>
              {/each}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
