<script>
  import { onMount } from 'svelte';

  let element;

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        }
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -48px 0px',
      }
    );

    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  });
</script>

<div bind:this={element} class="reveal">
  <slot />
</div>
