<script lang="ts">
  import { onMount, tick } from 'svelte';
  import { goto } from '$app/navigation';
  import { resolve } from '$app/paths';
  import { ScrollArea } from '$lib/components/ui/scroll-area/index';
  import { climbs } from '$lib/data/climbs';
  import { portfolio } from '$lib/data/projects';
  import { identity, bio, work } from '$lib/data/profile';

  type OutputKind = 'text' | 'help' | 'ls' | 'whoami' | 'bio' | 'work' | 'ticklist' | 'projects';
  type Entry = {
    id: number;
    input: string;
    kind: OutputKind;
    lines?: string[];
  };

  const resume = '/Sergio_Falcon_Resume.pdf';

  // Home directory: folders map to routes, files map to printable content.
  const dirs = ['about', 'portfolio'];
  const files = ['bio.txt', 'work.log', 'ticklist.log', 'resume.pdf'];

  const commands: { name: string; desc: string }[] = [
    { name: 'ls', desc: 'list the home directory' },
    { name: 'cd <dir>', desc: 'open a folder (about, portfolio)' },
    { name: 'cat <file>', desc: 'print a file (bio.txt, work.log, …)' },
    { name: 'projects', desc: 'list my projects' },
    { name: 'bio', desc: 'print my bio' },
    { name: 'work.log', desc: 'print my work history' },
    { name: 'ticklist', desc: 'list notable climbing sends' },
    { name: 'whoami', desc: 'print name, title & bio' },
    { name: 'resume', desc: 'open my resume' },
    { name: 'help', desc: 'list available commands' },
    { name: 'clear', desc: 'clear the screen' }
  ];

  let nextId = 0;
  let history = $state<Entry[]>([
    { id: nextId++, input: '', kind: 'text', lines: ["type 'help' to list commands, or 'ls' to look around"] }
  ]);
  let value = $state('');
  let past = $state<string[]>([]);
  let pastIdx = $state(-1);

  let scroller = $state<HTMLElement | null>(null);
  let inputEl = $state<HTMLInputElement>();

  function print(input: string, kind: OutputKind, lines?: string[]) {
    history = [...history, { id: nextId++, input, kind, lines }];
  }

  async function scrollToEnd() {
    await tick();
    scroller?.scrollTo({ top: scroller.scrollHeight });
  }

  function navigate(input: string, dir: string) {
    print(input, 'text', [`opening ~/${dir} ...`]);
    goto(resolve(dir === 'about' ? '/about' : '/portfolio'));
  }

  function openResume(input: string) {
    print(input, 'text', ['opening resume.pdf ...']);
    window.open(resume, '_blank', 'noopener');
  }

  function cd(input: string, arg: string) {
    if (!arg || arg === '~' || arg === '.') print(input, 'text', ['~']);
    else if (dirs.includes(arg)) navigate(input, arg);
    else print(input, 'text', [`cd: no such file or directory: ${arg}`]);
  }

  function cat(input: string, arg: string) {
    switch (arg) {
      case 'bio.txt':
      case 'bio':
        print(input, 'bio');
        break;
      case 'work.log':
      case 'work':
        print(input, 'work');
        break;
      case 'ticklist.log':
      case 'ticklist':
        print(input, 'ticklist');
        break;
      case 'resume.pdf':
      case 'resume':
        openResume(input);
        break;
      case '':
        print(input, 'text', ['usage: cat <file>']);
        break;
      default:
        print(input, 'text', [`cat: ${arg}: No such file or directory`]);
    }
  }

  function exec(raw: string) {
    const parts = raw.split(/\s+/);
    const cmd = parts[0].toLowerCase();
    const arg = (parts[1] ?? '').toLowerCase();

    switch (cmd) {
      case 'help':
        print(raw, 'help');
        break;
      case 'ls':
      case 'dir':
        print(raw, 'ls');
        break;
      case 'cd':
        cd(raw, arg);
        break;
      case 'cat':
      case 'open':
        cat(raw, arg);
        break;
      case 'projects':
        print(raw, 'projects');
        break;
      case 'bio':
      case 'about':
      case 'bio.txt':
        print(raw, 'bio');
        break;
      case 'work':
      case 'work.log':
        print(raw, 'work');
        break;
      case 'ticklist':
      case 'ticklist.log':
        print(raw, 'ticklist');
        break;
      case 'whoami':
        print(raw, 'whoami');
        break;
      case 'resume':
      case 'resume.pdf':
      case './resume.pdf':
        openResume(raw);
        break;
      case 'clear':
        history = [];
        break;
      default:
        print(raw, 'text', [`command not found: ${cmd}`, "type 'help' for a list of commands"]);
    }
  }

  async function run() {
    const raw = value.trim();
    value = '';
    pastIdx = -1;
    if (!raw) return;
    past = [...past, raw];
    exec(raw);
    await scrollToEnd();
  }

  // ls click-throughs — clicking a folder/file behaves like typing the command.
  function clickDir(dir: string) {
    navigate(`cd ${dir}`, dir);
  }
  async function clickFile(file: string) {
    cat(`cat ${file}`, file);
    await scrollToEnd();
  }

  function onKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      event.preventDefault();
      run();
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (!past.length) return;
      pastIdx = pastIdx === -1 ? past.length - 1 : Math.max(0, pastIdx - 1);
      value = past[pastIdx];
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (pastIdx === -1) return;
      pastIdx += 1;
      if (pastIdx >= past.length) {
        pastIdx = -1;
        value = '';
      } else {
        value = past[pastIdx];
      }
    }
  }

  function focusInput() {
    inputEl?.focus({ preventScroll: true });
  }

  onMount(() => focusInput());
</script>

<ScrollArea class="term-prompt" bind:viewportRef={scroller}>
  <!-- svelte-ignore a11y_no_static_element_interactions, a11y_click_events_have_key_events -->
  <div class="term-prompt__content font-term text-sm leading-relaxed sm:text-base" onclick={focusInput}>
    {#each history as entry (entry.id)}
    {#if entry.input}
      <div class="term-prompt__line">
        <span class="text-(--term-green)">$</span>
        <span class="text-(--term-text)">{entry.input}</span>
      </div>
    {/if}

    {#if entry.kind === 'text'}
      {#each entry.lines ?? [] as line, i (i)}
        <div class="text-(--term-muted)">{line}</div>
      {/each}
    {:else if entry.kind === 'help'}
      <div class="term-prompt__grid py-1">
        {#each commands as c (c.name)}
          <span class="text-(--term-green)">{c.name}</span>
          <span class="text-(--term-muted)">{c.desc}</span>
        {/each}
      </div>
    {:else if entry.kind === 'ls'}
      <div class="term-ls py-1">
        {#each dirs as d (d)}
          <button class="term-ls__dir" onclick={() => clickDir(d)}>{d}/</button>
        {/each}
        {#each files as f (f)}
          <button class="term-ls__file" onclick={() => clickFile(f)}>{f}</button>
        {/each}
      </div>
    {:else if entry.kind === 'whoami'}
      <div class="space-y-1 py-1">
        <div class="glow-green text-xl font-semibold text-(--term-green)">{identity.name}</div>
        <div class="text-(--term-muted)">
          <span class="text-(--term-amber)">&gt;</span> {identity.title}
          <span class="text-(--term-muted)">//</span>
          <span class="glow-amber text-(--term-amber)">{identity.tagline}</span>
        </div>
        <div class="text-(--term-text)">{bio[0]}</div>
      </div>
    {:else if entry.kind === 'bio'}
      <div class="space-y-2 py-1">
        {#each bio as para, i (i)}
          <p class="text-(--term-text)">{para}</p>
        {/each}
      </div>
    {:else if entry.kind === 'work'}
      <div class="space-y-2 py-1">
        {#each work as job (job.company)}
          <div>
            <div>
              <span class="text-(--term-green)">{job.title}</span>
              <span class="text-(--term-muted)">@ {job.company}</span>
              <span class="text-(--term-muted)">[{job.startDate} – {job.endDate}]</span>
            </div>
            <div class="text-xs text-(--term-muted)">{job.description}</div>
          </div>
        {/each}
      </div>
    {:else if entry.kind === 'ticklist'}
      <div class="space-y-3 py-1">
        <div>
          <div class="term-rule mb-1 text-(--term-amber)">// boulder</div>
          {#each climbs.boulder as climb (climb.name)}
            <div class="flex items-baseline gap-2 py-0.5">
              <span class="term-tag shrink-0">{climb.grade}</span>
              <span class="min-w-0 text-(--term-text)">{climb.name}</span>
              <span class="ml-auto shrink-0 pl-2 text-xs text-(--term-muted)">{climb.location}</span>
            </div>
          {/each}
        </div>
        <div>
          <div class="term-rule mb-1 text-(--term-amber)">// sport</div>
          {#each climbs.sport as climb (climb.name)}
            <div class="flex items-baseline gap-2 py-0.5">
              <span class="term-tag shrink-0">{climb.grade}</span>
              <span class="min-w-0 text-(--term-text)">{climb.name}</span>
              <span class="ml-auto shrink-0 pl-2 text-xs text-(--term-muted)">{climb.location}</span>
            </div>
          {/each}
        </div>
      </div>
    {:else if entry.kind === 'projects'}
      <div class="space-y-3 py-1">
        {#each portfolio as p (p.name)}
          <div>
            <div class="flex flex-wrap items-baseline gap-x-2">
              <span class="text-(--term-green)">{p.name.trim()}</span>
              <span class="text-xs text-(--term-muted)">// {p.techstack.join(', ')}</span>
            </div>
            <div class="text-xs text-(--term-muted)">{p.description}</div>
            {#if p.links.length}
              <div class="text-xs">
                {#each p.links as link (link.url)}
                  <a
                    href={link.url}
                    target="_blank"
                    rel="external noopener noreferrer"
                    class="mr-3 text-(--term-amber) hover:underline">↗ {link.name}</a
                  >
                {/each}
              </div>
            {/if}
          </div>
        {/each}
      </div>
    {/if}
  {/each}

    <div class="term-prompt__line">
      <span class="text-(--term-green)">$</span>
      <input
        bind:this={inputEl}
        bind:value
        onkeydown={onKeydown}
        class="term-prompt__field"
        type="text"
        autocomplete="off"
        autocapitalize="off"
        autocorrect="off"
        spellcheck="false"
        aria-label="terminal input"
      />
    </div>
  </div>
</ScrollArea>
