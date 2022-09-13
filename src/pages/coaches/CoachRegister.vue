<template>
    <base-card>
        <h2>Register as a coach now!</h2>
        <coach-form @save-data="registerCoach"></coach-form>
    </base-card>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue';

export default {
	components: {
		CoachForm,
	},
	methods: {
		registerCoach(newCoach) {
			this.$store.dispatch('coaches/registerCoach', newCoach)
			this.$router.replace('/coaches');
		}
	}
};
</script>

<style scoped>
h2 {
    margin: 0.5rem 0 1rem 0;
}
</style> 