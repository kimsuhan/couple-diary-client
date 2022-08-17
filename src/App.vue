<template>
<div class="pb-[65px]">
    <router-view></router-view>
</div>
<NavBar v-if="navShow(this.$route.name) === true"></NavBar>
</template>

<script>
import NavBar from '@/components/NavBar';

export default {
    name: 'App',
    components: {
        NavBar
    },
    methods: {
        navShow : (currentPath) => {
            if(currentPath === 'home' || currentPath === 'search' || currentPath === 'map' || currentPath === 'calendar' || currentPath === 'profile') {
                return true;
            } else {
                return false;
            }
        },
    },
}
</script>