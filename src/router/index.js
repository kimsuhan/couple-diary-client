import { createRouter, createWebHashHistory } from 'vue-router'

//import views component
import Home from '../views/HomeView.vue'
import Calendar from '../views/CalendarView.vue'
import Map from '../views/MapView.vue';
import Profile from '../views/ProfileView.vue';
import Search from '../views/SearchView.vue';
import Login from '../views/LoginView.vue';
import Register from '../views/RegisterView.vue';

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
		name: 'map',
		path: '/map',
		component: Map
	},{
		name: 'profile',
		path: '/profile',
		component: Profile
	},{
		name: 'search',
		path: '/search',
		component: Search
	},{
		name: 'login',
		path: '/login',
		component: Login
	},{
		name: 'register',
		path: '/register',
		component: Register
	}
]

//Init router
const router = createRouter({ history: createWebHashHistory(), routes })

export default router
