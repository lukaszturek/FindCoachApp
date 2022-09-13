export default {
	namespaced: true,
	state() {
		return {
			requests: [],
		}
	},
	getters: {
		hasRequests(state) {
			return state.requests.length > 0;
		},
		getRequests(state) {
			return state.requests;
		},
	},
	mutations: {
		sendRequest(state, payload) {
			const newRequest = { id: Date.now().toString(), ...payload };
			state.requests.push(newRequest);
		}
	},
	actions: {
		sendRequest(context, payload) {
			context.commit('sendRequest', payload);
		}
	}
}