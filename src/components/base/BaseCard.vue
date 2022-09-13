<template>
	<section>
		<slot></slot>
	</section>
</template>

<script>
export default {};
</script>

<style scoped>
	section {
		margin: 2rem auto;
		padding: 1rem;
		width: min(90%, 40rem);
		border-radius: 0.75rem;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	}
</style>