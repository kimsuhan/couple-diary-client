<style scoped>
   .bottom-sheets {
      animation: bottom-sheets .45s ease-in-out forwards;
      transform: translateY(-10%);
   }

   @keyframes bottom-sheets {
      from {
         transform: translateY(150%) scale(.75);
      } to {
         transform: translateY(-10%) scale(1);
      }
   }
</style>
<template>
	<section>
      <!-- Cover image -->
      <div class="relative">
         <img :src="'/v1/file/' + diaryData.PHOTO_SRC" class="w-full" v-if="diaryData.PHOTO_SRC !== undefined"/>
         <span class="fixed left-0 right-0 top-0 px-6">
            <router-link to="home">
            <div class="w-full md:w-8/12 lg:w-4/12 mx-auto py-4">
               <i class="fa fa-chevron-left bg-gray-50 px-2 py-1 text-green-700 z-50 rounded bg-opacity-75"></i>
            </div>
            </router-link>
         </span>
      </div>
      <!-- Bottom sheets -->
      <div class="bottom-sheets p-6 w-full relative rounded-t-xl bg-white">
         <!-- Button heart -->
         <span class="absolute right-6 -top-4 bg-white px-2 py-1 rounded-full shadow">
            <i
            class="duration-300 text-red-600 fas fa-heart"></i>
         </span>

         <!-- The title -->
         <div class="flex items-center justify-between">
            <span>
               <strong class="mb-1 w-full flex items-center gap-2">
                  <h1>{{diaryData.DIARY_TITLE}}</h1>
               </strong>
               <p class="text-xs text-gray-400">{{diaryData.DDAY}}일</p>
            </span>

            <!-- rating -->
            <span class="text-xs gap-1 flex items-center text-gray-400">
               {{diaryData.DIARY_DATE}}
            </span>
         </div>
         <!-- Description -->
         <div class="mt-5">
            <!-- <p class="font-medium text-sm">Description</p> -->
            <p class="text-xs text-gray-500" style="white-space:pre-line">
               {{diaryData.DIARY_CONTENT}}
            </p>
         </div>
      </div>
	</section>
</template>

<script>
import axios from '@/utils/axios.js';
import { ref, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router';

export default {
    name: 'DiaryView',
    props: ["diaryNo"],
    setup(props) {
      let diaryData = ref({});

        onBeforeMount(() => {
            axios.getData(`/v1/diary/${props.diaryNo}`).then((data) => {
                diaryData.value = data.data[0];
            });
        })
        if(props.diaryNo === undefined) {
            const router = useRouter();
            router.push('home');
            return;
        }



        return {
            diaryData
        }
      }
   }
</script>