export default {
	namespaced: true,
	state() {
		return {
			coaches: [
				{
					id: "c1",
					firstName: "Jack",
					lastName: "Smith",
					areas: ["frontend", "backend", "career"],
					description: "I'm Jack and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
					hourlyRate: 30
				},
				{
					id: "c2",
					firstName: "Julie",
					lastName: "Jones",
					areas: ["frontend", "career"],
					description: "I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.",
					hourlyRate: 35
				}
			],
			activeFilters: ['frontend', 'backend', 'career'],
		}
	},
	getters: {
		getFilteredCoachesIds(state) {
			return state.coaches.filter(coach => coach.areas.some(area => state.activeFilters.includes(area))).map(coach => coach.id);
		},
		getCoachById: (state) => (coachId) => {
			return state.coaches.find(coach => coach.id === coachId);
		},
		getActiveFilters(state) {
			return state.activeFilters;
		},
	},
	mutations: {
		updateActiveFilters(state, payload) {
			state.activeFilters = payload.activeFilters;
		},
		registerCoach(state, payload) {
			const newCoach = { id: Date.now().toString(), ...payload };
			state.coaches.push(newCoach);
		}
	},
	actions: {
		updateActiveFilters(context, payload) {
			context.commit('updateActiveFilters', payload);
		},
		registerCoach(context, payload) {
			context.commit('registerCoach', payload);
		}
	}
}