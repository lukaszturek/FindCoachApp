<template>
    <router-link v-if="link" :class="mode" :to="link">
        <slot></slot>
    </router-link>
    <button :class="mode" v-else>
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: {
        mode: {
            type: String,
            required: false,
            default: null,
        },
        link: {
            type: String,
            required: false,
            default: null,
        },
    },
};
</script>

<style scoped>
button,
a {
    font: inherit;
    padding: 0.75rem 1.5rem;
    color: white;
    background-color: #3a0061;
    border: 1px solid #3a0061;
    border-radius: 3rem;
    cursor: pointer;
}

a:hover,
a:active,
button:hover,
button:active {
    background-color: #270041;
    border-color: #270041;
}

a {
    display: inline-block;
    text-decoration: none;
}

.outline {
    color: #3a0061;
    background-color: transparent;
}

.outline:hover,
.outline:active {
    background-color: #edd2ff;
}

.flat {
    color: #3a0061;
    background-color: transparent;
    border-color: transparent;
}

.flat:hover,
.flat:active {
    background-color: #edd2ff;
    border-color: transparent;
}
</style>