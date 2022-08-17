<template>
    <section class="fixed left-0 right-0 bottom-0">
        <div class="duration-300 w-full md:w-8/12  lg:w-4/12 mx-auto px-6 py-2.5 bg-white flex justify-between nav-shadow ">
            <template v-for="(menu, index) in menus" :key="index">
                <router-link :to="menu.id">
                    <i :class="menu.icon + [this.$route.name === menu.id ? ' text-green-400' : ' text-gray-500']" class="duration-300"></i>
                </router-link>
            </template>
        </div>
    </section>
</template>

<script>export default {
    name: 'NavBar',
    setup() {
        const menus = [{
                id: 'map',
                icon: 'fa fa-map'
            },{
                id: 'calendar',
                icon: 'fa fa-calendar-day'
            },{
                id: 'home',
                icon: 'fa fa-home'
            },{
                id: 'search',
                icon: 'fa fa-search'
            },{
                id: 'profile',
                icon: 'far fa-user'
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