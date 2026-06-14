<script lang="ts">
  import TermWindow from '$lib/components/TermWindow.svelte';
  import TermPrompt from '$lib/components/TermPrompt.svelte';
</script>

<svelte:head>
  <title>Sergio Falcon</title>
  <meta name="description" content="Sergio Falcon — Full Stack Developer & Rock Climber" />
</svelte:head>

<div class="flex h-full w-full flex-col">
  <!-- Dimmed hero footage behind a deep gradient so terminal text stays legible -->
  <video autoplay loop muted playsinline class="fixed inset-0 -z-10 h-screen w-screen object-cover">
    <!-- R2 public URL - replace with your bucket's public domain once uploaded -->
    <source src="https://pub-3a7425f9f682477db3d120f2aac9d510.r2.dev/heroVideo.mp4" type="video/mp4" />
  </video>
  <div
    class="fixed inset-0 -z-10 bg-[radial-gradient(120%_90%_at_50%_30%,rgba(7,11,9,0.55),rgba(7,11,9,0.92))]"
  ></div>

  <div class="flex min-h-full w-full flex-col items-center justify-center px-4 py-16">
    <TermWindow title="sergio@falcon: ~/welcome" glow class="w-full max-w-xl">
      <div class="font-term space-y-3 text-sm leading-relaxed sm:text-base">
        <p class="text-(--term-muted)">
          <span class="text-(--term-green)">$</span> whoami
        </p>
        <h1
          class="glow-green text-left text-4xl font-semibold tracking-tight text-(--term-green) sm:text-6xl"
        >
          Sergio&nbsp;Falcon
        </h1>
        <p class="text-(--term-muted)">
          <span class="text-(--term-amber)">&gt;</span>
          <span class="text-(--term-text)">Full&nbsp;Stack&nbsp;Developer</span>
          <span class="text-(--term-muted)">//</span>
          <span class="glow-amber text-(--term-amber)">Rock&nbsp;Climber</span>
        </p>

        <div class="pt-2">
          <TermPrompt />
        </div>
      </div>
    </TermWindow>
  </div>
</div>
