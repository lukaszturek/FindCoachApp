<template>
    <form @submit.prevent="sendRequest">
        <label for="email">Your E-Mail</label>
        <input
            type="email"
            name="email"
            v-model.trim="email"
        />

        <label for="message">Message</label>
        <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            v-model.trim="message"
        ></textarea>

        <p class="errors" v-if="!formIsValid">
            Please enter a valid email and non-empty message.
        </p>
        <base-button>Send Message</base-button>
    </form>
</template>

<script>
export default {
	props: ['coachId'],
    emits: ['send-request'],
    data() {
        return {
            email: '',
            message: '',
            formIsValid: true,
        };
    },
    methods: {
        sendRequest() {
            this.validateForm();

			if(!this.formIsValid) {
				return;	
			}

            const newRequest = {
                email: this.email,
                message: this.message,
				coachId: this.coachId,
            };

            this.$emit('send-request', newRequest);
        },
        validateForm() {
            this.formIsValid = true;
            if (this.email === '' || this.message === '') {
                this.formIsValid = false;
            }
        }
    },
};
</script>

<style scoped>
form {
    margin-top: 1rem;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 0.75rem;
    display: flex;
    flex-direction: column;
}

form label {
    margin: 0 0 0.5rem 0;
    font-weight: bold;
}

form input,
form textarea {
	margin: 0 0 0.5rem 0;
    border: 1px solid #ccc;
	font: inherit;
    resize: vertical;
}

form input:focus,
form textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

form button {
    align-self: center;
}
</style>