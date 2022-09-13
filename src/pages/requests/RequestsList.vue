<template>
    <base-card>
        <h2>Requests Received</h2>

        <ul v-if="hasRequests">
            <request-item
                v-for="request in requests"
                :key="request.id"
                :email="request.email"
                :message="request.message"
            ></request-item>
        </ul>
        <h3 v-else>You haven't received any requests yet!</h3>
    </base-card>
</template>

<script>
import RequestItem from '../../components/requests/RequestItem.vue';

export default {
    components: {
        RequestItem,
    },
    computed: {
        requests() {
            return this.$store.getters['requests/getRequests'];
        },
        hasRequests() {
            return this.$store.getters['requests/hasRequests'];
        },
    },
};
</script>

<style scoped>
h2 {
    margin-top: 0.5rem;
    text-align: center;
}

ul {
    list-style: none;
    margin: 2rem auto;
    padding: 0;
    max-width: 30rem;
}

h3 {
    text-align: center;
}
</style>