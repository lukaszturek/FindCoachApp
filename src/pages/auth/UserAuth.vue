<template>
    <base-card>
        <form @submit.prevent="submitForm">
            <label for="email">E-Mail</label>
            <input type="email" id="email" v-model.trim="email" />

            <label for="password">Password</label>
            <input type="password" id="password" v-model="password" />
			<p v-if="!formIsValid">Please enter a valid email and password (at least 6 characters).</p>
            <section class="actions">
                <base-button>{{ submitButtonText }}</base-button>
                <base-button type="button" mode="flat" @click="switchAuthMode"
                    >{{ switchModeButtonText }}</base-button
                >
            </section>
        </form>
    </base-card>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            formIsValid: true,
            mode: 'login',
        };
    },
	computed: {
		submitButtonText() {
			if (this.mode === 'login') {
				return 'Login';
			} else {
				return 'Signup';
			}
		},
		switchModeButtonText() {
			if (this.mode === 'login') {
				return 'Signup instead';
			} else {
				return 'Login instead';
			}
		},
	},
    methods: {
        submitForm() {
            this.formIsValid = true;
            if (this.email === '' || this.password.length < 6) {
                this.formIsValid = false;
                return;
            }
        },
        switchAuthMode() {
			if (this.mode === 'login') {
				this.mode = 'signup';
			} else {
				this.mode = 'login';
			}
		},
    },
};
</script>

<style scoped>
form {
    margin-top: 0.5rem;
    padding: 1rem;
    border-radius: 0.75rem;
    display: flex;
    flex-direction: column;
}

form label {
    margin: 0 0 0.5rem 0;
    font-weight: bold;
}

form input {
    margin: 0 0 0.5rem 0;
    border: 1px solid #ccc;
    font: inherit;
}

form input:focus {
    border-color: #3d008d;
    background-color: #faf6ff;
    outline: none;
}

.actions > button {
    margin-right: 0.5rem;
}
</style>