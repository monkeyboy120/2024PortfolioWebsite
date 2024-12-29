<script>
  import { onMount, onDestroy } from 'svelte';

  let mouseX = 0;
  let mouseY = 0;
  let followerX = 0;
  let followerY = 0;
  let color = '#EAD7D7'; // Default color for the dot

  const updateMousePosition = (event) => {
    // Get mouse position relative to the viewport
    mouseX = event.clientX;
    mouseY = event.clientY;
  };

  const animateFollower = () => {
    // Smoothly interpolate the follower's position
    followerX += (mouseX - followerX) * 0.1;
    followerY += (mouseY - followerY) * 0.1;

    // Detect background color of the element under the cursor
    const elementUnderCursor = document.elementFromPoint(mouseX, mouseY);
    if (elementUnderCursor) {
      const bgColor = window.getComputedStyle(elementUnderCursor).backgroundColor;
      color = bgColor === 'rgba(0, 0, 0, 0)' ? '#EAD7D7' : bgColor; // Fallback color
    }

    // Continue the animation loop
    requestAnimationFrame(animateFollower);
  };

  onMount(() => {
    // Add mousemove listener
    window.addEventListener('mousemove', updateMousePosition);
    // Start the animation loop
    animateFollower();

    return () => {
      // Clean up event listener
      window.removeEventListener('mousemove', updateMousePosition);
    };
  });
</script>

<style>
  .mouse-dot {
    position: fixed;
    width: 30px;
    height: 30px;
    background-color: var(--dot-color, #EAD7D7);
    border: 2px solid #412234;
    border-radius: 50%;
    pointer-events: none;
    transform: translate(-50%, -50%);
    transition: background-color 0.3s ease; /* Smooth color transition */
    z-index: 50;
  }

  /* Hide the default cursor */
  body {
    cursor: none;
  }
</style>

<!-- Render the mouse-following dot -->
<div
  class="mouse-dot"
  style="
    left: {followerX}px;
    top: {followerY}px;
    --dot-color: {color};
  "
></div>
