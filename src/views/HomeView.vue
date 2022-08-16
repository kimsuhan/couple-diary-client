<template>
    <section class="px-6 py-5">
        <!-- Location -->
        <div class="text-gray-400 flex items-center gap-2">
            Home
        </div>
    </section>
    <NavBar/>
</template>

<script>
import NavBar from '../components/NavBar';

export default {
  name: 'HomeView'
  , components: {NavBar}
}
</script>

<style scoped>
   .text-xxs {
      font-size: .75rem;
   }
   .text-xxxs {
      font-size: .55rem;
   }
   .category-wrapper, .card-wrapper {
      @apply flex gap-3 overflow-scroll;
   }
   .category {
      @apply bg-gray-100 duration-300 px-3 py-1 rounded-xl text-green-500 text-xs font-medium;
   }
   .active {
      @apply bg-green-400 text-gray-50;
   }
</style>
