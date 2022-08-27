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

    * {
        font-size:18px !important;
    }


</style>
<template>
    <Transition>
        <div class="fixed flex justify-center h-screen w-full left-0 right-0 bottom-0 " style="z-index:1; background-color: rgba(0, 0, 0, 0.5);" v-show="viewData.popupShow === true" @click="clearDiary()">
            <div class="flex flex-wrap bg-white w-[300px] h-[300px] rounded-3xl self-center border-gray-300 border-solid border-2 drop-shadow-lg">
                <div class="success-checkmark self-center">
                    <div class="check-icon mt-3">
                        <span class="icon-line line-tip"></span>
                        <span class="icon-line line-long"></span>
                        <div class="icon-circle"></div>
                        <div class="icon-fix"></div>
                    </div>
                </div>
                <p class="w-full text-center text-2xl"> 등록되었습니다. </p>
            </div>
        </div>
    </Transition>

<input ref="fileInput" class="form-control hidden" type="file" id="formFile" v-on:change="pickFile(this.$refs.fileInput.files)"/>
	<section class="">
        <!-- Cover image -->
        <div class="relative">
            <img src="@/assets/image-placeholder.png" class="w-full" v-if="viewData.fileData === ''"/>
            <img :src="viewData.fileData" class="w-full" v-else/>
        </div>
        <!-- Bottom sheets -->
        <div class="p-6 w-full relative rounded-t-xl bg-white bottom-sheets">
            <!-- Button heart -->
            <span class="absolute right-6 -top-4 bg-white px-2 py-1 rounded-full shadow">
                <i class="fa fa-image duration-300" @click="this.$refs.fileInput.click()"/>
            </span>

        <div class="grid grid-cols-4 gap-2">
            <div class="col-form-label">Title</div>
            <input class="col-span-3 form-control" type="text" placeholder="제목을 입력해주세요." v-model="viewData.title"/>
            <div class="col-form-label">Date</div>
            <input class="col-span-3 form-control" type="date" v-model="viewData.date"/>
            <div class="col-form-label">Content</div>
            <textarea class="col-span-3 form-control" type="text" rows="11" placeholder="내용을 입력해주세요." v-model="viewData.content"/>
            <button class="btn btn-primary form-control col-span-4 mt-2" @click="createDiary()"> 등록 </button>
        </div>
      </div>
	</section>
</template>

<script>
import { reactive } from 'vue'
import axios from '@/utils/axios.js';
import { notify } from "@kyvg/vue3-notification";

export default {
    name: 'DiaryAddView',
    setup() {
        const viewData = reactive({
            fileData: '',
            title:'',
            content:'',
            date:'',
            image:'',
            popupShow: false,
        });

        const pickFile = (file) => {
            if (file && file[0]) {
                let reader = new FileReader();
                reader.onload = (e) => {
                    viewData.fileData = e.target.result
                }

                reader.readAsDataURL(file[0]);
                viewData.image = file[0];
            }
         }


         const createDiary = () => {
            if(viewData.title === '') {
                notify({type: 'error', text: '제목을 입력해주세요.'});
                return;
            }
            if(viewData.date === '') {
                notify({type: 'error', text: '날짜를 선택해주세요.'});
                return;
            }
            if(viewData.content === '') {
                notify({type: 'error', text: '내용을 입력해주세요.'});
                return;
            }
            if(viewData.image === '') {
                notify({type: 'error', text: '사진을 첨부해주세요.'});
                return;
            }

            let formData = new FormData();
            formData.append('image',viewData.image);
            formData.append('title',viewData.title);
            formData.append('content',viewData.content);
            formData.append('date',viewData.date);
            formData.append('couple_id', 'aa');

            // console.log(Array.from(formData));
            axios.postData('/v1/diary', formData).then(response => {
                if(response.status === 201) {
                    viewData.popupShow = true;
                }
            })
         };

         const clearDiary = () => {
            viewData.fileData = '';
            viewData.title = '';
            viewData.content = '';
            viewData.date = '';
            viewData.image = '';
            viewData.popupShow = false;
         }

         return {
            viewData,
            pickFile,
            createDiary,
            clearDiary
         }
      }
   }
</script>