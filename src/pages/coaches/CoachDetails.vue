<template>
    <div>
        <base-card>
            <h2>{{ fullName }}</h2>
            <h3>${{ coach.hourlyRate }}/hour</h3>
        </base-card>
        <base-card>
            <h2>Interested? Reach out now!</h2>
            <transition name="request" mode="out-in">
                <base-button v-if="!isContactForm" :link="contactLink">Contact</base-button>
                <request-form
                    v-else
                    :coachId="id"
                    @send-request="sendRequest"
                ></request-form>
            </transition>
        </base-card>
        <base-card>
            <ul>
                <base-badge
                    v-for="area in coach.areas"
                    :key="area"
                    :name="area"
                ></base-badge>
            </ul>
            <p>{{ coach.description }}</p>
        </base-card>
    </div>
</template>

<script>
import RequestForm from '../../components/requests/RequestForm.vue';

export default {
    components: {
        RequestForm,
    },
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
        isContactForm() {
            return this.$route.fullPath === this.contactLink;
        },
    },
    methods: {
        sendRequest(newRequest) {
            this.$store.dispatch('requests/sendRequest', newRequest);
            this.$router.replace('/requests');
        },
    },
};
</script>

<style scoped>
h2 {
    margin: 0.5rem 0 1rem 0;
}

h3 {
    margin: 1rem 0 0.5rem 0;
}

ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
}

.request-enter-from {
  opacity: 0;
  transform: translateX(10px);
}

.request-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}

.request-enter-active {
  transition: all 0.5s ease-out;
}

.request-leave-active {
  transition: all 0.3s ease-in;
}

.request-enter-to,
.request-leave-from {
  opacity: 1;
  transform: translateX(0);
}
</style>