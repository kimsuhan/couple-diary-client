<style scoped>
   * {box-sizing:border-box}

   /* Slideshow container */
   .slideshow-container {
      max-width: 1000px;
      position: relative;
      margin: auto;
   }

   /* Next & previous buttons */
   .prev, .next {
      cursor: pointer;
      position: absolute;
      top: 50%;
      width: auto;
      margin-top: -22px;
      padding: 16px;
      color: white;
      font-weight: bold;
      font-size: 18px;
      transition: 0.6s ease;
      border-radius: 0 3px 3px 0;
      user-select: none;
   }

   /* Position the "next button" to the right */
   .next {
      right: 0;
      border-radius: 3px 0 0 3px;
   }

   /* On hover, add a black background color with a little bit see-through */
   .prev:hover, .next:hover {
   background-color: rgba(0,0,0,0.8);
   }

   /* Caption text */
   .text {
   color: #f2f2f2;
   font-size: 15px;
   padding: 8px 12px;
   position: absolute;
   bottom: 8px;
   width: 100%;
   text-align: center;
   }

   /* Number text (1/3 etc) */
   .numbertext {
      color: #f2f2f2;
      font-size: 12px;
      padding: 8px 12px;
      top: 0;
   }

   /* The dots/bullets/indicators */
   .dot {
   cursor: pointer;
   height: 15px;
   width: 15px;
   margin: 0 2px;
   background-color: #bbb;
   border-radius: 50%;
   display: inline-block;
   transition: background-color 0.6s ease;
   }

   .active, .dot:hover {
   background-color: #717171;
   }

   /* Fading animation */
   .fade {
      animation-name: fade;
      animation-duration: 1.5s;
   }

   @keyframes fade {
      from {opacity: .4}
      to {opacity: 1}
   }
</style>
<template>
	<section v-if="diaryData !== undefined">
      <!-- Cover image -->
      <div class="relative">
         <!-- Slideshow container -->
         <div class="slideshow-container">
            <!-- Full-width images with number and caption text -->
            <div class="mySlides fade" v-for="( item, index ) in photoData" v-bind:key="item.PHOTO_SRC" :class="[photoIndex === index ? 'show':'hidden']">
               <div class="flex flex-row w-full absolute">
                  <div class="grow">
                     <i class="fa fa-chevron-left bg-gray-50 px-2 py-1 text-green-700 z-50 rounded bg-opacity-75 mt-3 ml-3" @click="$router.go(-1)"></i>
                  </div>
                  <div class="numbertext">{{index+1}} / {{photoData.length}}</div>
               </div>

               <img :src="'/v1/file' + item.PHOTO_SRC" class="w-full object-contain">
            </div>

            <!-- Next and previous buttons -->
            <a class="prev" @click="photoIndex > 0 ? photoIndex-- : photoIndex" :class="photoIndex === 0 ? 'hidden' : ''">&#10094;</a>
            <a class="next" @click="photoIndex+1 < photoData.length ? photoIndex++ : photoIndex" :class="photoIndex+1 === photoData.length ? 'hidden' : ''">&#10095;</a>
         </div>

         <!-- The dots/circles -->
         <div style="text-align:center">
            <span class="dot" :class="photoIndex === index ? 'active' : ''" @click="photoIndex = index" v-for="( item, index ) in photoData" v-bind:key="'dot' + index"></span>
         </div>


            <!-- <span class="fixed left-0 right-0 top-0 px-6">
               <div class="md:w-8/12 lg:w-4/12 mx-auto py-4">
                  <i class="fa fa-chevron-left bg-gray-50 px-2 py-1 text-green-700 z-50 rounded bg-opacity-75" @click="$router.go(-1)"></i>
               </div>
            </span> -->
      </div>

      <!-- Bottom sheets -->
      <div class="bottom-sheets p-3 w-full relative rounded-t-xl bg-white">
         <!-- Button heart -->
         <!-- <span class="absolute right-6 -top-4 bg-white px-2 py-1 rounded-full shadow">
            <i class="duration-300 text-red-600 fas fa-heart"></i>
         </span> -->

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
      let diaryData = ref();
      let photoData = ref();
      let photoIndex = ref(0);

        onBeforeMount(() => {
            axios.getData(`/v1/diary/${props.diaryNo}`).then((data) => {
                diaryData.value = data.data.diary;
                photoData.value = data.data.photo;

                let i = 0;
                for(let data of photoData.value) {
                  data.status = i === 0 ? 'active' : 'none';
                  i++;
                }
            });
        });

        if(props.diaryNo === undefined) {
            const router = useRouter();
            router.push('home');
            return;
        }

        return {
            diaryData,
            photoData,
            photoIndex
        }
      }
   }
</script>