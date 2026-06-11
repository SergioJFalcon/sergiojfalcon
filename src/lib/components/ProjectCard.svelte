<script lang="ts">
  import { Link as LinkIcon } from '@lucide/svelte';
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

  let { project }: { project: Project } = $props();
</script>

<div>
  <Card.Root>
    <Card.Header class="flex flex-row text-xl">
      <Avatar.Root class="mr-4 h-12 w-12">
        <Avatar.Image src={project.logo} alt={project.name} />
        <Avatar.Fallback>{project.initials}</Avatar.Fallback>
      </Avatar.Root>
      <div>{project.name}</div>
    </Card.Header>
    <Card.Content class="grid grid-cols-1">
      <div class="col-span-1">
        {project.description}
      </div>
    </Card.Content>
    <Card.Footer class="grid grid-cols-1">
      {#if project.techstack.length > 0}
        <span class="text-lg">TechStack</span>
        <div class="col-span-1 px-4">
          {#each project.techstack as tech (tech)}
            <Badge variant="outline" class="mr-1 mb-1">{tech}</Badge>
          {/each}
        </div>
      {/if}
      {#if project.links.length > 0}
        <div class="col-span-1 pt-4">
          <span class="flex text-lg"><LinkIcon class="mr-2" />Links</span>
          <div class="px-4">
            {#each project.links as link (link.url)}
              <a href={link.url} class="flex">{link.name}</a>
            {/each}
          </div>
        </div>
      {/if}
    </Card.Footer>
  </Card.Root>
</div>
