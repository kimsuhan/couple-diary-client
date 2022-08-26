<style scoped>
   .bottom-sheets {
      @apply p-6 w-full relative rounded-t-xl bg-white;
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
    <input ref="fileInput" class="form-control hidden" type="file" id="formFile" v-on:change="pickFile(this.$refs.fileInput.files)"/>
	<section class="h-screen">
        <!-- Cover image -->
        <div class="relative">
            <img src="@/assets/image-placeholder.png" class="w-full" v-if="viewData.fileData === ''"/>
            <img :src="viewData.fileData" class="w-full" v-else/>
        </div>
        <!-- Bottom sheets -->
        <div class="bottom-sheets">
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


         <!-- CTA -->
         <!-- <button class="btn btn-secondary">Visit place</button> -->
      </div>
	</section>
</template>

<script>
import { toRef, reactive } from 'vue'
import axios from '@/utils/axios.js';

export default {
    name: 'DiaryAddView',
    setup(props) {
        const diaryNo = toRef(props, 'diaryNo');
        const viewData = reactive({
            state: '',
            fileData: '',
            title:'',
            content:'',
            date:'',
            image:'',
        });

        if(diaryNo.value === undefined) {
            viewData.state = 'C';
        }

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

            let formData = new FormData();
            formData.append('image',viewData.image);
            formData.append('title',viewData.title);
            formData.append('content',viewData.content);
            formData.append('date',viewData.date);
            formData.append('couple_id', 'aa');

            // console.log(Array.from(formData));
            axios.postData('/v1/diary', formData).then(response => {
                if(response.status === 201) {
                    alert('자산 추가 요청이 완료되었습니다.');
                }
            })

            // const diaryBody = {
            //     title: '',
            //     content: '',
            //     date: '',
            //     image: '',
            //     couple_id: ''
            // }
         }

         return {
            viewData,
            pickFile,
            createDiary
         }
      }
   }
</script>