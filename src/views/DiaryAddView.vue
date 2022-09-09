<style scoped>

</style>
<template>
    <Transition>
        <div class="fixed flex justify-center h-screen w-full left-0 right-0 bottom-0 " style="z-index:999999; background-color: rgba(0, 0, 0, 0.5);" v-show="popupShow === true" @click="fn_closePopup()">
            <div class="flex flex-wrap bg-white w-[300px] h-[300px] rounded-3xl self-center border-gray-300 border-solid border-2 drop-shadow-lg">
                <div class="success-checkmark self-center">
                    <div class="check-icon mt-3">
                        <span class="icon-line line-tip"></span>
                        <span class="icon-line line-long"></span>
                        <div class="icon-circle"></div>
                        <div class="icon-fix"></div>
                    </div>
                </div>
                <p class="w-full text-center text-2xl"> 성공적으로 저장 됬어요! </p>
            </div>
        </div>
    </Transition>
    
    <input ref="fileInput" class="form-control hidden" type="file" id="formFile" multiple='multiple' accept='image/*' v-on:change="fn_pickFile(this.$refs.fileInput.files)"/>
    <div class="h-[50px] bg-white flex shadow-sm fixed top-0 w-screen items-center justify-center" style="z-index: 999998;">
        <router-link to="login" class="absolute left-0 pl-4" ref="backButton" v-show="displayStep === 'photo'">
            <i class="fa fa-chevron-left"></i>
        </router-link>
        <a class="absolute left-0 pl-4 text-blue-500" @click="displayStep = 'photo'" v-show="displayStep === 'input'"> 사진편집 </a>
        <div class="text-center">
            <div>다이어리 등록</div>
        </div>
        <a class="absolute right-0 pr-4 text-blue-500" @click="fn_showInputStep()" v-show="displayStep === 'photo'"> 다음 </a>
        <a class="absolute right-0 pr-4 text-blue-500" v-show="displayStep === 'input'" @click="this.$refs.submitButton.click()"> 완료 </a>
    </div>
    <div class="px-4 pt-[70px] flex flex-wrap gap-3 w-screen justify-center" v-show="displayStep === 'photo'">

        <!-- 사진 Preview -->
        <div class="relative h-[140px] w-[110px] flex items-center justify-center" v-for="item in images" v-bind:key="item.idx">
            <div class="absolute top-0 left-0 bg-green-500 rounded-full h-5 w-5 flex justify-center items-center" v-show="item.main">
                <i class="fa fa-check text-white text-xs"></i>
            </div>
            <img class="h-[130px] w-[100px] object-cover" :src="item.preivew" @click="fn_setMainImage(item.idx)"/>
            <div class="absolute bottom-0 right-0 bg-red-500 rounded-full h-5 w-5 flex justify-center items-center" @click="fn_removeImage(item.idx)">
                <i class="fa fa-minus text-white text-xs"></i>
            </div>
        </div>
        
        <!-- 사진 등록용 -->
        <div class="h-[140px] w-[110px] bg-gray-600 flex items-center justify-center border-gray-400" @click="this.$refs.fileInput.click()">
            <i class="fa fa-circle-plus text-5xl text-gray-400"></i>
        </div>
        <div class="card">
            <div class="card-body">
            <h5 class="card-title"><i class="fa fa-circle-plus text-gray-400"></i> 영역을 클릭하여 사진을 첨부해주세요.</h5>
            <p class="card-text">1. 첨부한 사진을 클릭하여 <a class="text-green-500 font-bold">대표 이미지</a>를 선택할 수 있습니다.</p>
            <p class="card-text">2. 선택하지 않을 경우 첫번째 사진이 대표 이미지가 됩니다.</p>
        </div>
</div>
    </div>
    <form class="px-4 pt-[70px] flex flex-col w-screen" v-show="displayStep === 'input'"  @submit.prevent="fn_saveDiary">
        <div class="input-group mb-3">
            <span class="input-group-text bg-white" id="basic-addon1"><i class="fa-solid fa-heading"></i></span>
            <input type="text" class="form-control" placeholder="제목을 입력해주세요." v-model="diaryData.title" required>
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text bg-white" id="basic-addon2"><i class="fa-solid fa-calendar"></i></span>
            <input type="date" class="form-control" placeholder="날짜를 입력해주세요." v-model="diaryData.date" required>
        </div>
        <div class="input-group">
            <span class="input-group-text bg-white"><i class="fa-solid fa-quote-left"></i></span>
            <textarea class="form-control resize" rows="10" placeholder="내용을 입력해주세요." v-model="diaryData.content" required></textarea>
        </div>
        <button type="submit" ref="submitButton"></button>
    </form>
</template>

<script>
import { reactive, ref } from 'vue'
import axios from '@/utils/axios.js';
import { notify } from "@kyvg/vue3-notification";
import { useRouter } from 'vue-router'

export default {
    name: 'DiaryAddView',
    props: {
        diaryId: String,
    },
    setup(props) {
        const router = useRouter();
        const displayStep = ref('photo'); // 화면 스탭용
        const images = reactive([]);
        const popupShow = ref(false);
        const saveMode = ref();
        let fileIdx = ref(0);
        let mainIdx = ref(0);

        const diaryData = reactive({
            title:'',
            date:'',
            content:'',
        });

        if(props.diaryId) {
            axios.getData(`/v1/diary/${props.diaryId}`).then((data) => {
                // 사진 처리
                for(const photo of data.data.diary.photos) {
                    convertURLtoFile(`/v1/file/${photo.src}`).then((image) => {
                        const data = {
                            idx: fileIdx.value++,
                            file: image,
                            preivew: URL.createObjectURL(image),
                            main: false,
                        }

                        images.push(data);

                    });
                }

                diaryData.title = data.data.diary.title;
                diaryData.date = data.data.diary.date.substr(0, 10);
                diaryData.content = data.data.diary.content;
            });

            saveMode.value = 'update';
        }
        else {
            console.log('insert');
            saveMode.value = 'insert';
        }

        // 사진 Upload Function
        const fn_pickFile = (file) => {
            for(const image of file) {
                const data = {
                    idx: fileIdx.value++,
                    file: image,
                    preivew: URL.createObjectURL(image),
                    main: false,
                }

                images.push(data);
            }
        }

        // 사진 메인 선정
        const fn_setMainImage = (idx) => {
            mainIdx.value = idx;

            for(const image of images) {
                if(image.idx === idx) {
                    image.main = true;
                } else {
                    image.main = false;
                }
            }
        }

        // 사진 제거
        const fn_removeImage = (idx) => {
            images.splice(idx, 1);

            let index = 0;
            for(const image of images) {
                image.idx = index++;
            }

            fileIdx.value = index;
        }

        // 사진 편집 -> 인풋으로 넘어가기 위한 과정
        const fn_showInputStep = () => {
            if(images.length === 0) {
                notify({type: 'error', text: '사진을 먼저 선택해주세요!'});
                return;
            }

            displayStep.value = 'input';
        }

        // 저장
        const fn_saveDiary = () => {
            let formData = new FormData();
            for(const image of images) {
                let file = image.file;
                formData.append("image", file);
            }

            // formData.append('image',viewData.image);
            formData.append('title',diaryData.title);
            formData.append('content',diaryData.content);
            formData.append('date',diaryData.date);
            formData.append('main_image', mainIdx.value);
            if(props.diaryId) {
                formData.append('id', props.diaryId);
            }

            axios.postData('/v1/diary/save', formData).then(response => {
                if(response.status === 201) {
                    popupShow.value = true;
                }
            });
        }

        const fn_closePopup = () => {
            router.push({
                name: 'home',
            })
        }

        //
        const convertURLtoFile = async (url) => {
            const response = await fetch(url);
            const data = await response.blob();
            const ext = url.split(".").pop(); // url 구조에 맞게 수정할 것
            const metadata = { type: `image/${ext}` };
            return new File([data], 'aa', metadata);
        };

         return {
            displayStep,
            images,
            diaryData,
            popupShow,
            fn_setMainImage,
            fn_removeImage,
            fn_pickFile,
            fn_showInputStep,
            fn_saveDiary,
            fn_closePopup,
         }
      }
   }
</script>