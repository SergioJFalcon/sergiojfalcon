import { A } from '@solidjs/router';
import { BriefcaseBusiness, Mountain } from 'lucide-solid';
import { OrbitControls, Html } from 'solid-drei';
import { For } from "solid-js";
// import { createControls } from 'solid-leva';
import { Canvas, createSignal, onMount, useThree } from 'solid-three'
import type { Component } from 'solid-js'
import resume from '@assets/Sergio_Falcon_Resume_v5.pdf';
import ClimbalyticsLogo from '@assets/images/climbalytics/climbalyticsIcon.png';
import GovReadyLogo from '@assets/images/govready/govreadyIcon.png';
import logo from '@assets/images/profile.jpg';
import RegScaleLogo from '@assets/images/regscale/regscaleIcon.png';

import JobCard from '@components/JobCard';
import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/avatar";
import { Button } from '@components/ui/button';


const About:Component = () => {
  const history = [
    {
      image: RegScaleLogo,
      company: 'RegScale Inc.',
      initials: 'RS',
      title: 'Full Stack Developer',
      description: 'Developed and maintained the company\'s web application.',
      startDate: 'Nov 2022',
      endDate: 'Nov 2023',
      url: 'https://www.regscale.com',
    },
    {
      image: GovReadyLogo,
      company: 'GovReady LLC.',
      initials: 'GR',
      title: 'Full Stack Developer',
      description: 'Developed and maintained the company\'s web application.',
      startDate: 'Sept 2021',
      endDate: 'Nov 2022',
      url: 'https://www.govready.com',
    },
    // {
    //   image: CruxLogo,
    //   company: 'Crux Climbing Center',
    //   description: 'Developed and maintained the company\'s web application.',
    //   title: 'Routesetter',
    //   startDate: 'Jan 2018',
    //   endDate: 'Sept 2021',
    //   url: 'https://cruxclimbingcenter.com',
    // },
    {
      image: ClimbalyticsLogo,
      company: 'Climbalytics LLC.',
      initials: 'CA',
      title: 'Jr Software Developer',
      description: 'Developed and maintained the company\'s web application.',
      startDate: 'Sept 2017',
      endDate: 'Dec 2017',
      url: 'https://www.climbalytics.com',
    },
    // {
    //   image: OutdoorPursuitsLogo,
    //   company: 'Outdoor Pursuits - UTSA',
    //   description: 'Developed and maintained the company\'s web application.',
    //   title: 'Rock Wall Coordinator',
    //   startDate: 'July 2015',
    //   endDate: 'Dec 2017',
    //   url: 'https://campusrec.utsa.edu/outdoor-pursuits/',
    // }
  ]

  const climbs = {
    boulder: [
      {
        name: 'Nine Pound Hammer',
        grade: 'V12',
        location: 'Austin, TX',
        date: '11/28/2023'
      },
      {
        name: 'Rumble in the Jungle',
        grade: 'V12',
        location: 'Hueco Tanks, TX',
        date: '2/27/2021'
      },
      {
        name: 'Tequila Sunrise Sit Start',
        grade: 'V12',
        location: 'Hueco Tanks, TX',
        date: '2/10/2024'
      },
      {
        name: 'Mr Big Stuff',
        grade: 'V11',
        location: 'Obed, TN',
        date: '3/25/2024'
      },
    ],
    sport: [
      {
        name: 'Patience Grasshopper',
        grade: '5.14a',
        location: 'Reimer\'s Ranch, TX',
        date: '11/20/2021'
      },
      {
        name: 'Dreamkeeper',
        grade: '5.13b',
        location: 'Reimer\'s Ranch, TX',
        date: '12/22/2018'
      },
      {
        name: 'House of Pain',
        grade: '5.13a',
        location: 'Reimer\'s Ranch, TX',
        date: '10/25/2017'
      }
    ]
  }
  
  return (
    <div>
      {/* <ThreeScene /> */}
      {/* <Canvas
        ref={sceneRef}
        camera={{
            position: [3, 3, 3],
        }}
        shadows
      >
        <Boulders />
        <Box />
        <Html position={[1, 1, 1]} occlude>
            Hello world
          </Html>
          <mesh
              receiveShadow
              position={[0, 0, 0]}
              scale={[100, 100, 1]}
              rotation={[-Math.PI / 2, 0, 0]}
            >
            <planeGeometry />
            <meshStandardMaterial color={'white'} />
          </mesh>
        <ambientLight />
        <spotLight position={[0, 5, 10]} intensity={1} />
        <OrbitControls makeDefault />
      </Canvas> */}
      <div id="aboutme" class="min-h-full min-w-full">
        <div class="flex justify-between w-full my-8">
          <Avatar class="w-32 h-32">
            <AvatarImage src={logo} />
            <AvatarFallback>SF</AvatarFallback>
          </Avatar>
          <div class="flex items-end ">
            <A href={resume} target="_self"><Button class=" text-xl rounded-full">Resume</Button></A>
          </div>
        </div>
        <div id="about" class="my-4">
          <div class="md:grid sm:grid-cols-1 md:grid-cols-4 md:gap-4">
            <div class="sm:col-span-1 md:col-span-3">
              <h1 class="text-4xl font-bold">Sergio Falcon</h1>
              <h1 class="text-2xl ">Full Stack Developer | Rock Climber</h1>
              <p class="text-md my-4">
                &emsp;I'm Sergio, a full stack developer and rock climber. Originally from Austin, TX; currently residing in Knoxville, TN. I graduated from the University of Texas at San Antonio with a Master's in Computer Science with a concentration in Software Engineering. I have a passion for creating, learning new technologies and developing apps. I'm aspiring to be a founder of my very own company to develop a variety of applications.
              </p>
              <p class="text-md my-4">
                &emsp;I've been climbing for over 10 years. I've competed in local and regional competitions and have set routes for local climbing gyms. I'm currently working on developing a climbing app to help climbers track their progress and share their climbing experiences. Some Achievements in climbing: v12 and 5.14a
              </p>
              <p class="text-md my-4">
                &emsp;I'm always looking for new opportunities to learn and grow as a developer and climber. Feel free to reach out to me if you have any questions or would like to collaborate on a project.
              </p>
            </div>

            <div id="history" class=" md:col-span-1 sm:mb-4 md:mb-4">
              <div class="rounded-md border">
                <h1 class="text-xl font-bold flex items-center mt-4 mx-4"><BriefcaseBusiness class="mx-2 mt-1" />Work</h1>
                <For each={history}>
                  {(job) => (
                    <div class="p-4">
                      <JobCard work={job} />
                    </div>
                  )}
                </For>
              </div>
            </div>
            <div class="col-span-3"/>
            <div id="climbing" class="col-span-1 sm:mb-2">
              <div class="rounded-md border">
                <h1 class="text-xl font-bold flex items-center mt-4 mx-4"><Mountain class="mx-2 mt-1" />Rock Climbing</h1>
                <div class="w-full rounded-lg shadow p-4">
                  <h4 class="text-lg font-semibold tracking-tight">Boulder</h4>
                  <For each={climbs.boulder}>
                    {(climb) => (
                      <h5 class="text-sm font-semibold tracking-tight ml-2">{climb.grade} - {climb.name}</h5>
                    )}
                  </For>
                  <h4 class="text-lg font-semibold tracking-tight">Sport</h4>
                  <For each={climbs.sport}>
                    {(climb) => (
                      <h5 class="text-sm font-semibold tracking-tight ml-2">{climb.grade} - {climb.name}</h5>
                    )}
                  </For>
                </div>
              </div>
            </div>
          </div>
          {/* <div>
            <img src={selfScenic} alt="Sergio Falcon" class="w-screen min-w-full" />
          </div> */}
        </div>
      </div>
   </div>
  );
}

export default About