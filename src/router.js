import { createRouter, createWebHistory } from "vue-router";

import CoachesList from './pages/coaches/CoachesList.vue';
import CoachDetails from './pages/coaches/CoachDetails.vue';
import CoachRegister from './pages/coaches/CoachRegister.vue';
import RequestsList from './pages/requests/RequestsList.vue';
import UserAuth from './pages/auth/UserAuth.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/', redirect: '/coaches',
		},
		{
			path: '/coaches', component: CoachesList,
		},
		{
			path: '/coaches/:id', component: CoachDetails, props: true, children: [
				{ path: '/coaches/:id/contact', component: CoachDetails },
			]
		},
		{
			path: '/register', component: CoachRegister,
		},
		{
			path: '/requests', component: RequestsList,
		},
		{
			path: '/auth', component: UserAuth,
		},
		{
			path: '/:notFound(.*)', component: NotFound,
		}
	]
});

export default router;