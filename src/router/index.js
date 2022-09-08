import { createRouter, createWebHashHistory } from 'vue-router'

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

//Routes
const routes = [{
		name: 'home',
		path: '/',
		alias: ['/home'],
		component: Home
	},{
		name: 'calendar',
		path: '/calendar',
		component: Calendar
	},{
		name: 'letter',
		path: '/letter',
		component: Letter
	},{
		name: 'profile',
		path: '/profile',
		component: Profile
	},{
		name: 'add',
		path: '/add',
		component: DiaryAdd
	},{
		name: 'login',
		path: '/login',
		component: Login
	},{
		name: 'register',
		path: '/register',
		component: Register
	},{
		name: 'diary',
		path: '/diary',
		component: Diary,
		props:true,
	},{
		name: 'detail',
		path: '/detail',
		component: DiaryDetail,
	}
]

//Init router
const router = createRouter({
	history: createWebHashHistory(),
	routes,
	scrollBehavior(to, from, savedPosition) {
		return savedPosition || {top : 0};
	}
})

export default router
