import { createRouter, createWebHashHistory } from 'vue-router'
import store from '@/store';
import { computed } from 'vue';

//import views component
import Home from '../views/HomeView.vue'
import Calendar from '../views/CalendarView.vue'
import Letter from '../views/LetterView.vue';
import Profile from '../views/ProfileView.vue';
import DiaryAdd from '../views/DiaryAddView.vue';
import Login from '../views/LoginView.vue';
import Register from '../views/RegisterView.vue';
import Diary from '../views/DiaryView.vue';
import DiaryDetail from '../views/DiaryDetailView.vue';

// Authentication
const requireAuth = () => (from, to, next) => {
    const token = computed(() => store.getters["Auth/getToken"]);
	if (token.value) {
		return next()
	}

	next('login');
}


// Authentication
const requireNoAuth = () => (from, to, next) => {
    const token = computed(() => store.getters["Auth/getToken"]);
	if (token.value) {
		return next('home')
	}

	next();
}

//Routes
const routes = [{
		name: 'home',
		path: '/',
		alias: ['/home'],
		component: Home,
		beforeEnter: requireAuth(),
	},{
		name: 'calendar',
		path: '/calendar',
		component: Calendar,
		beforeEnter: requireAuth(),
	},{
		name: 'letter',
		path: '/letter',
		component: Letter,
		beforeEnter: requireAuth(),
	},{
		name: 'profile',
		path: '/profile',
		component: Profile,
		beforeEnter: requireAuth(),
	},{
		name: 'add',
		path: '/add',
		component: DiaryAdd,
		beforeEnter: requireAuth(),
	},{
		name: 'login',
		path: '/login',
		component: Login,
		beforeEnter: requireNoAuth(),
	},{
		name: 'register',
		path: '/register',
		component: Register,
		beforeEnter: requireNoAuth(),
	},{
		name: 'diary',
		path: '/diary',
		component: Diary,
		props:true,
		beforeEnter: requireAuth(),
	},{
		name: 'detail',
		path: '/detail',
		component: DiaryDetail,
		beforeEnter: requireAuth(),
	}
]

//Init router
const router = createRouter({
	history: createWebHashHistory(),
	routes,
	scrollBehavior(to, from, savedPosition) {
		return savedPosition || {top : 0};
	}
});

export default router
