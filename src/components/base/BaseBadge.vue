<template>
    <li class="badge" :class="name">{{ name.toUpperCase() }}</li>
</template>

<script>
export default {
    props: ['name'],
};
</script>

<style scoped>
.badge {
    margin: 0 0.5rem 0 0;
    padding: 0.5rem 1.5rem;
    color: white;
    background-color: black;
    border: none;
    border-radius: 2rem;
}

.frontend {
    background-color: #3d008d;
}

.backend {
    background-color: #71008d;
}

.career {
	background-color: #8d006e;
}
</style>