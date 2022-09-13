<template>
<AlertComponent/>
<div>
    <router-view></router-view>
</div>
<NavBar v-if="navShow(this.$route.name) === true"></NavBar>
<notifications position="top right" class="mt-1" style="z-index:100000000000000000;" />
</template>

<script>
import NavBar from '@/components/NavBar';
import AlertComponent from '@/components/AlertComponent.vue';

export default {
    name: 'App',
    components: {
        NavBar,
        AlertComponent,
    },
    methods: {
        navShow : (currentPath) => {
            if(currentPath === 'home' || currentPath === 'letter' || currentPath === 'calendar' || currentPath === 'profile') {
                return true;
            } else {
                return false;
            }
        },
    },
}
</script>