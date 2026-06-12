<script lang="ts">
  import { resolve } from '$app/paths';
  import { page } from '$app/state';

  const links = [
    { href: '/', label: 'home' },
    { href: '/about', label: 'about' },
    { href: '/portfolio', label: 'portfolio' }
  ] as const;

  const isActive = (path: string) => page.url.pathname === path;
</script>

<nav
  class="font-term sticky top-0 z-1000 border-b border-(--term-border) bg-[rgba(7,11,9,0.72)] backdrop-blur-md"
>
  <ul class="mx-auto flex max-w-4xl items-center gap-1 p-3 text-sm sm:gap-3">
    <li class="mr-2 hidden text-(--term-muted) select-none sm:block">
      <span class="text-(--term-green)">~/sergio</span><span class="cursor"></span>
    </li>
    {#each links as link (link.href)}
      {@const active = isActive(link.href)}
      <li>
        <a
          href={resolve(link.href)}
          aria-current={active ? 'page' : undefined}
          class="group relative px-2 py-1 tracking-wide transition-colors duration-150
            {active ? 'text-(--term-green) glow-green' : 'text-(--term-muted) hover:text-(--term-text)'}"
        >
          <span class="text-(--term-green-dim) opacity-70">{active ? './' : ''}</span>{link.label}
          <span
            class="absolute -bottom-px left-0 h-px w-full origin-left bg-(--term-green) transition-transform duration-200
              {active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}"
          ></span>
        </a>
      </li>
    {/each}
  </ul>
</nav>
