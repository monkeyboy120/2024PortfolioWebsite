<script>
  import { onMount } from 'svelte';

  let menuOpen = false;
  let isScrolled = false;

  const smoothScroll = (event, targetId) => {
    event.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      menuOpen = false;
    }
  };

  onMount(() => {
    const handleScroll = () => {
      isScrolled = window.scrollY > 24;
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<nav class="fixed inset-x-0 top-0 z-20 px-4 py-4 sm:px-6">
  <div
    class={`page-shell flex items-center justify-between rounded-full border px-4 py-3 transition duration-300 sm:px-6 ${
      isScrolled
        ? 'border-line/80 bg-surface/90 shadow-panel backdrop-blur'
        : 'border-transparent bg-transparent'
    }`}
  >
    <a href="#hero" class="font-display text-xl text-ink">Joshua La</a>

    <button
      class="rounded-full border border-line bg-surface px-3 py-2 text-sm font-medium text-ink md:hidden"
      type="button"
      aria-label="Toggle navigation"
      aria-expanded={menuOpen}
      on:click={() => (menuOpen = !menuOpen)}
    >
      Menu
    </button>

    <ul class="hidden items-center gap-6 text-sm font-medium text-muted md:flex">
      <li>
        <a
          href="#about"
          on:click={(e) => smoothScroll(e, '#about')}
          class="transition hover:text-ink"
        >
          About
        </a>
      </li>
      <li>
        <a
          href="#projects"
          on:click={(e) => smoothScroll(e, '#projects')}
          class="transition hover:text-ink"
        >
          Projects
        </a>
      </li>
      <li>
        <a
          href="#contact"
          on:click={(e) => smoothScroll(e, '#contact')}
          class="rounded-full border border-line bg-surface px-4 py-2 text-ink transition hover:border-accent hover:text-accent"
        >
          Contact
        </a>
      </li>
    </ul>
  </div>

  {#if menuOpen}
    <div class="page-shell mt-3 rounded-3xl border border-line bg-surface/95 p-4 shadow-panel backdrop-blur md:hidden">
      <ul class="flex flex-col gap-3 text-sm font-medium text-muted">
        <li>
          <a href="#about" on:click={(e) => smoothScroll(e, '#about')} class="block rounded-2xl px-3 py-2 transition hover:bg-accentSoft/60 hover:text-ink">
            About
          </a>
        </li>
        <li>
          <a href="#projects" on:click={(e) => smoothScroll(e, '#projects')} class="block rounded-2xl px-3 py-2 transition hover:bg-accentSoft/60 hover:text-ink">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" on:click={(e) => smoothScroll(e, '#contact')} class="block rounded-2xl px-3 py-2 transition hover:bg-accentSoft/60 hover:text-ink">
            Contact
          </a>
        </li>
      </ul>
    </div>
  {/if}
</nav>
