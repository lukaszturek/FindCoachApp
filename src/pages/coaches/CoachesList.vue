<template>
    <section>
        <coach-filter></coach-filter>
        <base-card>
            <section class="controls">
                <base-button mode="outline">Refresh</base-button>
                <base-button link="/register">Register as Coach</base-button>
            </section>
            <ul>
                <coach-item
                    v-for="coachId in filteredCoachesIds"
                    :key="coachId"
                    :id="coachId"
                ></coach-item>
            </ul>
        </base-card>
    </section>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue';
import CoachFilter from '../../components/coaches/CoachFilter.vue';

export default {
    components: {
        CoachItem,
        CoachFilter,
    },
    computed: {
        filteredCoachesIds() {
            return this.$store.getters['coaches/getFilteredCoachesIds'];
        },
    },
};
</script>

<style scoped>
.controls {
    display: flex;
    justify-content: space-between;
}

ul {
    margin: 0;
    padding: 0;
    list-style: none;
}
</style>