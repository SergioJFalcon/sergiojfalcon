import { A } from '@solidjs/router';

import HeroVideo from '@assets/videos/heroVideo.mp4';

export default function Home() {

  return (
    <div class="h-full w-full">
      <video autoplay loop muted plays-inline class="absolute right-0 bottom-0 z-[-10] min-w-full min-h-full object-cover">
        <source src={HeroVideo} type="video/mp4" />
      </video>
      <div class="min-h-full min-w-full flex flex-col items-center justify-center">
        <div class="text-center">
          <h1 class="text-white text-6xl font-semibold">Sergio Falcon</h1>
          <A href="/about" target="_self" class="text-white text-xl inline-block border-2 border-white py-3 px-16 rounded-full mt-5">Enter</A>
        </div>
      </div>
    </div>
  );
}
