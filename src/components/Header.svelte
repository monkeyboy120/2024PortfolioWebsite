<script>
  const smoothScroll = (event, targetId) => {
    event.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
</script>

<nav class="bg-darkPurple text-white px-4 sm:px-8 py-4 fixed w-full top-0 z-10 shadow-lg">
  <div class="container mx-auto flex justify-between items-center">
    <!-- Logo -->
    <a href="/" class="text-xl font-bold">Joshua La</a>

    <!-- Navigation Links -->
    <ul class="flex space-x-6">
      <li>
        <a
          href="#about"
          on:click={(e) => smoothScroll(e, '#about')}
          class="hover:text-wisteria"
        >
          About
        </a>
      </li>
      <li>
        <a
          href="#projects"
          on:click={(e) => smoothScroll(e, '#projects')}
          class="hover:text-wisteria"
        >
          Projects
        </a>
      </li>
      <li>
        <a
          href="#contact"
          on:click={(e) => smoothScroll(e, '#contact')}
          class="hover:text-wisteria"
        >
          Contact
        </a>
      </li>
    </ul>
  </div>
</nav>
