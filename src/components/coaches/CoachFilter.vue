<template>
    <base-card>
        <h2>Find Your Coach</h2>

        <template v-for="area in areas" :key="area">
            <input
                type="checkbox"
                :id="area"
				:value="area"
                v-model="activeFilters"
            />
            <label :for="area">{{ area }}</label>
        </template>
    </base-card>
</template>

<script>
import BaseCard from '../base/BaseCard.vue';
export default {
    components: { BaseCard },
    data() {
        return {
            areas: ['frontend', 'backend', 'career'],
        };
    },
	computed: {
		activeFilters: {
			get() {
				return this.$store.getters['coaches/getActiveFilters'];
			},
			set(activeFilters) {
				this.$store.dispatch('coaches/updateActiveFilters', {activeFilters})
			}
		}
	}
};
</script>

<style scoped>
h2 {
	margin: 0.5rem 0;
}

label {
    margin: 0 1rem 0 0.25rem;
    text-transform: capitalize;
}
</style>