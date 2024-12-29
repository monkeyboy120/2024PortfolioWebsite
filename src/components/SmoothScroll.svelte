<script>
	export let targetId = "";
	
	function handleClick(event) {
		event.preventDefault();
		const target = document.querySelector(targetId);
		if (target) {
			target.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	}
</script>

<a href={targetId} on:click={handleClick} class="cursor-pointer">
	<slot />
</a>
