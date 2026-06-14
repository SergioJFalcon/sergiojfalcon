<script lang="ts">
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import { techGroups as allTechGroups } from '$lib/techColors';
  import { portfolio } from '$lib/data/projects';

  let selectedTechs = $state(new Set<string>());

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
  <title>Portfolio</title>
  <meta name="description" content="Portfolio by Sergio Falcon" />
</svelte:head>

<section class="mx-auto flex w-full flex-col py-10">
  <div class="font-term mb-2 text-sm text-(--term-muted)">
    <span class="text-(--term-green)">sergio@falcon</span>:<span class="text-(--term-amber)">~/portfolio</span>$
    ls -la
  </div>
  <h1
    class="glow-green mb-8 text-left font-term text-4xl font-bold tracking-tight text-(--term-green) lowercase"
  >
    ./portfolio
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
      <ProjectCard {project} ontagclick={toggleTech} activeTechs={selectedTechs} />
    {/each}
  </div>
</section>