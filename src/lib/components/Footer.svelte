<script lang="ts">
  import {
    SiFacebook,
    SiGithub,
    SiInstagram,
    SiTwitch,
    SiX,
    SiYoutube
  } from '@icons-pack/svelte-simple-icons';

  // LinkedIn was removed from Simple Icons (trademark), so it's inlined below.
  const socials = [
    { href: 'https://www.github.com/sergiojfalcon', icon: SiGithub, label: 'GitHub' },
    { href: 'https://www.youtube.com/@powersergio', icon: SiYoutube, label: 'YouTube' },
    { href: 'https://www.twitch.com/powersergio', icon: SiTwitch, label: 'Twitch' },
    { href: 'https://www.instagram.com/sergiojfalcon', icon: SiInstagram, label: 'Instagram' },
    { href: 'https://www.twitter.com/sergiojfalcon', icon: SiX, label: 'X (Twitter)' },
    { href: 'https://www.facebook.com/sergiojfalcon', icon: SiFacebook, label: 'Facebook' }
  ];
</script>

<footer class="relative inset-x-0 bottom-0 mt-8 border-t border-(--term-border) py-5">
  <div class="mx-auto max-w-4xl px-4">
    <div
      class="mb-3 flex flex-row items-center justify-center gap-4 text-(--term-muted)"
    >
      <a
        href="https://www.linkedin.com/in/sergiojfalcon"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        class="transition-all hover:scale-110 hover:text-(--term-green) hover:drop-shadow-[0_0_8px_rgba(77,255,160,0.55)]"
      >
        <svg role="img" viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path
            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
          />
        </svg>
      </a>
      {#each socials as social (social.href)}
        <a
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          class="transition-all hover:scale-110 hover:text-(--term-green) hover:drop-shadow-[0_0_8px_rgba(77,255,160,0.55)]"
        >
          <social.icon size={22} color="currentColor" />
        </a>
      {/each}
    </div>
    <div class="font-term text-center text-xs text-(--term-muted)">
      <span class="text-(--term-green-dim)">$</span> echo "© 2024 Sergio Falcon"
    </div>
  </div>
</footer>
