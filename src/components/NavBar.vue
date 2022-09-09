<template>
    <section class="fixed left-0 right-0 bottom-0">
        <div class="w-full px-6 py-3 bg-white flex justify-between nav-shadow">
            <template v-for="(menu, index) in menus" :key="index">
                <router-link :to="menu.id">
                    <i :class="menu.icon + [this.$route.name === menu.id ? ' text-green-400' : ' text-gray-500']" class="duration-300 text-2xl"></i>
                </router-link>
            </template>
        </div>
    </section>
</template>

<script>export default {
    name: 'NavBar',
    setup() {
        const menus = [{
                id: 'letter',
                icon: 'fa fa-envelope'
            },{
                id: 'calendar',
                icon: 'fa fa-calendar-day'
            },{
                id: 'home',
                icon: 'fa fa-home'
            },{
                id: 'login',
                icon: 'fa fa-warning'
            },{
                id: 'profile',
                icon: 'fa fa-user'
            }
        ];

        return {
            menus
        }
    }
}
</script>

<style scoped>
   .nav-shadow {
      box-shadow: -3px 3px 12px whitesmoke;
   }
</style>