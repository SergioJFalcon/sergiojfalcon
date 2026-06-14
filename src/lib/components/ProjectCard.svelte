<script lang="ts">
  import { Link as LinkIcon } from '@lucide/svelte';
  import { techColor } from '$lib/techColors';
  import * as Avatar from '$lib/components/ui/avatar/index';
  import { Badge } from '$lib/components/ui/badge/index';
  import * as Card from '$lib/components/ui/card/index';

  type ProjectLink = { name: string; url: string };

  type Project = {
    name: string;
    description: string;
    logo: string;
    initials: string;
    company?: string;
    techstack: string[];
    links: ProjectLink[];
  };

  let {
    project,
    ontagclick,
    activeTechs
  }: {
    project: Project;
    ontagclick?: (tech: string) => void;
    activeTechs?: Set<string>;
  } = $props();
</script>

<div class="group h-full">
  <Card.Root
    class="h-full gap-4 border-(--term-border) bg-[rgba(30,30,30,0.85)] backdrop-blur-md transition-all duration-200 group-hover:border-(--term-green-dim) group-hover:shadow-[0_0_26px_rgba(86,156,214,0.16)]"
  >
    <Card.Header class="flex flex-row items-center gap-3">
      <Avatar.Root class="h-11 w-11 rounded border border-(--term-border)">
        <Avatar.Image src={project.logo} alt={project.name} />
        <Avatar.Fallback>{project.initials}</Avatar.Fallback>
      </Avatar.Root>
      <div class="font-term text-lg font-semibold text-(--term-green)">
        <span class="text-(--term-muted)">~/</span>{project.name.trim()}
      </div>
    </Card.Header>
    <Card.Content>
      <p class="text-sm leading-relaxed text-(--term-text)/85">
        {project.description}
      </p>
    </Card.Content>
    <Card.Footer class="mt-auto flex flex-col items-start gap-3">
      {#if project.techstack.length > 0}
        <div class="w-full">
          <span class="term-rule mb-2 w-full text-(--term-amber)">// techstack</span>
          <div class="flex flex-wrap gap-1.5">
            {#each project.techstack as tech (tech)}
              {@const color = techColor(tech)}
              {@const active = activeTechs?.has(tech) ?? false}
              <button
                onclick={ontagclick ? () => ontagclick(tech) : undefined}
                class="term-tag transition-all duration-150 {ontagclick ? 'cursor-pointer hover:brightness-125' : 'cursor-default'}"
                style="color: {color}; border-color: {active ? color : `${color}40`}; background-color: {active ? `${color}22` : `${color}12`}"
              >{tech}</button>
            {/each}
          </div>
        </div>
      {/if}
      {#if project.links.length > 0}
        <div class="w-full">
          <span class="term-rule mb-2 flex w-full items-center gap-1 text-(--term-green)">
            <LinkIcon class="h-3 w-3" />links
          </span>
          <div class="flex flex-wrap gap-x-4 font-term text-sm">
            {#each project.links as link (link.url)}
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                class="text-(--term-green) hover:glow-green"
              >
                <span class="text-(--term-muted)">&gt;</span> {link.name}
              </a>
            {/each}
          </div>
        </div>
      {/if}
    </Card.Footer>
  </Card.Root>
</div>
