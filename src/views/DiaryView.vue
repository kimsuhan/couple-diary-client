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
   <input ref="fileInput" class="form-control hidden" type="file" id="formFile" v-on:change="pickFile(this.$refs.fileInput.files)" accept="image/*"/>
	<section>
      <!-- Cover image -->
      <div class="relative">
         <img src="@/assets/image-placeholder.png" class="w-full" v-if="viewData.fileData === ''"/>
         <img :src="viewData.fileData" class="w-full" v-else/>
         <span class="fixed left-0 right-0 top-0 px-6">
            <div class="w-full md:w-8/12 lg:w-4/12 mx-auto py-4">
               <i
               @click="router.push({ name: 'home' })"
               class="fa fa-chevron-left bg-gray-50 px-2 py-1 text-green-700 z-50 rounded bg-opacity-75"></i>
            </div>
         </span>
      </div>
      <!-- Bottom sheets -->
      <div class="bottom-sheets p-6 w-full relative rounded-t-xl bg-white">
         <!-- Button heart -->
         <span class="absolute right-6 -top-4 bg-white px-2 py-1 rounded-full shadow">
            <!-- <i
            @click="isHeartClicked = !isHeartClicked"
            :class="isHeartClicked ? 'fas' : 'far'"
            class="duration-300 text-red-600 fa-heart"></i> -->
         </span>

         <!-- The title -->
         <div class="flex items-center justify-between">
            <span>
               <strong class="mb-1 w-full flex items-center gap-2">
                  <h1>크리스마스</h1>
               </strong>
               <!-- <p class="text-xs text-gray-400">인천광역시, 어쩌고저쩌고</p> -->
            </span>

            <!-- rating -->
            <span class="text-xs gap-1 flex items-center text-gray-400">
               2020-01-02
            </span>
         </div>
         <!-- Description -->
         <div class="mt-5">
            <!-- <p class="font-medium text-sm">Description</p> -->
            <p class="text-xs text-gray-500">
               안녕 어쩌고 저쩌고 방가라 방가 붕붕방방 빙비리방방<br/>
               안녕 어쩌고 저쩌고 방가라 방가 붕붕방방 빙비리방방
               안녕 어쩌고 저쩌고 방가라 방가 붕붕방방 빙비리방방
               안녕 어쩌고 저쩌고 방가라 방가 붕붕방방 빙비리방방
            </p>
         </div>
      </div>
	</section>
</template>

<script>
import { toRef, reactive } from 'vue'

   export default {
      name: 'DiaryView',
      props: ["diaryNo"],
      setup(props) {
         const diaryNo = toRef(props, 'diaryNo');
         const viewData = reactive({
            fileData: '',
         });

         console.log(diaryNo);

         return {
            viewData
         }
      }
   }
</script>