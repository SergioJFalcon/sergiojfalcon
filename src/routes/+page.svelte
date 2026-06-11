<script lang="ts">
  import { resolve } from '$app/paths';
  import HeroVideo from '$lib/videos/heroVideo.mp4';
</script>

<svelte:head>
  <title>Sergio Falcon</title>
  <meta name="description" content="Sergio Falcon — Full Stack Developer & Rock Climber" />
</svelte:head>

<div class="relative h-full w-full">
  <video
    autoplay
    loop
    muted
    playsinline
    class="absolute right-0 bottom-0 -z-10 min-h-full min-w-full object-cover"
  >
    <source src={HeroVideo} type="video/mp4" />
  </video>
  <div class="flex min-h-full min-w-full flex-col items-center justify-center">
    <div class="text-center">
      <h1 class="text-6xl font-semibold text-white">Sergio Falcon</h1>
      <a
        href={resolve('/about')}
        target="_self"
        class="mt-5 inline-block rounded-full border-2 border-white px-16 py-3 text-xl text-white"
      >
        Enter
      </a>
    </div>
  </div>
</div>
