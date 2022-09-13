<template>
    <li>
        <h3>{{ this.fullName }}</h3>
        <h4>${{ coach.hourlyRate }}/hour</h4>
		<ul>
			<base-badge v-for="area in coach.areas" :key="area" :name="area"></base-badge>
		</ul>
		<section class="actions">
			<base-button mode="outline" :link="contactLink">Contact</base-button>
			<base-button :link="detailLink">View Details</base-button>
		</section>
    </li>
</template>

<script>
export default {
	props: ['id'],
	computed: {
		coach() {
			return this.$store.getters['coaches/getCoachById'](this.id);
		},
		fullName() {
			return this.coach.firstName + ' ' + this.coach.lastName;
		},
		contactLink() {
			return `/coaches/${this.id}/contact`;
		},
		detailLink() {
			return `/coaches/${this.id}`;
		}

	}
};
</script>

<style scoped>
li {
    margin: 1rem 0;
    padding: 1rem;
    border-radius: 0.75rem;
    border: 1px solid #3a0061;
}

h3 {
	margin: 0.5rem 0;
	font-size: 1.5rem;
}

h4 {
	margin: 0.5rem 0;
	font-size: 1rem;
}

ul {
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
}

.actions {
	margin: 0.5rem 0 0 0;
	display: flex;
	justify-content: end;
}

.actions > a:first-of-type {
	margin-right: 0.5rem;
}
</style>