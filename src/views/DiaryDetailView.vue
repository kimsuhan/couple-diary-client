<template>
    <input ref="fileInput" class="form-control hidden" type="file" id="formFile" multiple='multiple' accept='image/*' v-on:change="pickFile(this.$refs.fileInput.files)"/>
    <div class="flex gap-1 flex-auto flex-wrap justify-center w-screen pt-3">
        <div class="flex">
            <img src="@/assets/image-placeholder.png" class=" w-24 h-24 object-cover"/>
        </div>
        <div class="flex">
            <img src="@/assets/image-placeholder.png" class=" w-24 h-24 object-cover"/>
        </div>
        <div class="flex">
            <img src="@/assets/image-placeholder.png" class=" w-24 h-24 object-cover"/>
        </div>
        <div class="flex">
            <img src="@/assets/image-placeholder.png" class=" w-24 h-24 object-cover"/>
        </div>
        <div class="flex">
            <img src="@/assets/image-placeholder.png" class=" w-24 h-24 object-cover"/>
        </div>
        <div class="flex">
            <img src="@/assets/image-placeholder.png" class=" w-24 h-24 object-cover"/>
        </div>
        <div class="flex">
            <img src="@/assets/image-placeholder.png" class=" w-24 h-24 object-cover"/>
        </div>
        <div class="flex">
            <img src="@/assets/image-placeholder.png" class=" w-24 h-24 object-cover"/>
        </div>
        <div class="flex">
            <img src="@/assets/image-placeholder.png" class=" w-24 h-24 object-cover"/>
        </div>


        <!-- <img src="@/assets/image-placeholder.png" class="w-full"/> -->

        <!-- Cover image -->
        <!-- <img src="@/assets/image-placeholder.png" class="w-full" @click="this.$refs.fileInput.click()" v-if="viewData.files.length === 0"/>
        <img :src="viewData.files[0]" class="w-full" @click="this.$refs.fileInput.click()" v-if="viewData.files.length > 0"/>

        <div class="bg-white flex flex-row w-screen h-36 gap-1 py-1" style="overflow-x:scroll" v-if="viewData.files.length > 0">
            <img class="m-1" :src="item" v-for="( item, index ) in viewData.files" v-bind:key="index" v-show="index > 0"/>
        </div> -->
        <!-- Bottom sheets -->
        <!-- <div class="p-6 w-full relative rounded-t-xl bg-white bottom-sheets"> -->
            <!-- Button heart -->
            <!-- <span class="absolute right-6 -top-4 bg-white px-2 py-1 rounded-full shadow">
                <i class="fa fa-image duration-300" @click="this.$refs.fileInput.click()"/>
            </span> -->

        <!-- <div class="p-6 bg-white">
            <div class="grid grid-cols-4 gap-2">
                <div class="col-form-label">제목</div>
                <input class="col-span-3 form-control" type="text" placeholder="제목을 입력해주세요." v-model="viewData.title"/>
                <div class="col-form-label">날짜</div>
                <input class="col-span-3 form-control" type="date" v-model="viewData.date"/>
                <div class="col-form-label">내용</div>
                <textarea class="col-span-3 form-control" type="text" rows="11" placeholder="내용을 입력해주세요." v-model="viewData.content"/>
                <button class="btn btn-primary form-control col-span-4 mt-2" @click="createDiary()"> 등록 </button>
            </div>
        </div> -->
	</div>
</template>

<script>
import {reactive} from 'vue';
export default {
    name: 'DiaryDetailView',
    setup() {
        const viewData = reactive({
            files: []
        });

        const pickFile = (files) => {
            if(files) {
                viewData.files = [];
                for(const file of files) {
                    let reader = new FileReader();
                    reader.onload = (e) => {
                        viewData.files.push(e.target.result);
                    }
                    reader.readAsDataURL(file);
                }
            }
            // if (files && files[0]) {
            //     let reader = new FileReader();
            //     reader.onload = (e) => {
            //         console.log(e);
            //         // viewData.fileData = e.target.result
            //     }

            //     reader.readAsDataURL(files[0]);
            //     // viewData.image = file;
            // }
         }

         return {
            pickFile,
            viewData
         };
    }
}
</script>