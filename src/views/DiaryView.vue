<style scoped>
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
        height: 8px;
        width: 8px;
        margin: 0 2px;
        background-color: #bbb;
        border-radius: 50%;
        display: inline-block;
        transition: background-color 0.6s ease;
    }

    .active, .dot:hover {
        background-color: #00bfff;
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
    <div class="h-[50px] bg-white flex flex-row items-center shadow-sm fixed top-0 w-screen" style="z-index: 1;">
        <div class="flex-none px-3" @click="$router.go(-1)">
            <i class="fa fa-chevron-left"></i>
        </div>
        <div class="flex-1 grow text-center">
            <div class="text-xs text-gray-400 font-bold">김수한</div>
            <div class="">{{diaryData.title}}</div>
        </div>
        <button class="flex-none px-3" data-bs-toggle="modal" data-bs-target="#addonModal">
            ...
        </button>
    </div>

    <section class="pt-[50px]">
        <!-- Cover image -->
        <div class="relative">
            <!-- Slideshow container -->
            <div class="slideshow-container">
                <!-- Full-width images with number and caption text -->
                <div class="mySlides fade" v-for="( item, index ) in photoData" v-bind:key="item.src" :class="[photoIndex === index ? 'show':'hidden']">
                    <img :src="'/v1/file' + item.src" class="w-full object-contain">
                </div>

                <!-- Next and previous buttons -->
                <div class="absolute left-0 top-0 h-full w-[50%]" @click="photoIndex > 0 ? photoIndex-- : photoIndex"></div>
                <div class="absolute right-0 top-0 h-full w-[50%]" @click="photoIndex+1 < photoData.length ? photoIndex++ : photoIndex"></div>
            </div>

            <!-- The dots/circles -->
            <div style="text-align:center" class="bg-white">
                <span class="dot" :class="photoIndex === index ? 'active' : ''" @click="photoIndex = index" v-for="( item, index ) in photoData" v-bind:key="'dot' + index"></span>
            </div>
        </div>

        <!-- Bottom sheets -->
        <div class="p-3 w-full relative bg-white">
            <!-- Description -->
            <div class="text-xs">
                <p class="font-medium text-xs text-gray-400 pb-3">{{diaryData.date ? diaryData.date.substr(0, 10) : ''}}</p>
                <p style="white-space:pre-line" class="text-[15px]">
                    {{diaryData.content}}
                </p>
            </div>
        </div>
    </section>

    <!-- Modal -->
    <div class="modal fade" id="addonModal" tabindex="-1" aria-labelledby="addonModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-sm">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="flex flex-col content-center justify-center text-center items-center">
                        <button class="text-xs pt-2">
                            수정
                        </button>
                        <div class="bg-gray-300 w-[80%] h-[0.1px] my-3"></div>
                        <button class="text-xs text-red-500 pb-2">
                            삭제
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<!-- {{diaryData.date.substr(0, 10)}} -->
<script>
    import axios from '@/utils/axios.js';
    import { ref } from 'vue'

export default {
    name: 'DiaryView',
    props: {
        diaryId: String,
    },
    setup(props) {
        let diaryData = ref({});
        let photoData = ref([]);
        let photoIndex = ref(0);
        let maxheight = ref(0);

        if(props.diaryId) {
            axios.getData(`/v1/diary/${props.diaryId}`).then((data) => {
                diaryData.value = data.data.diary;
                photoData.value = data.data.diary.photos;

                for(const data of photoData.value) {
                    if(data.height > maxheight.value) {
                        maxheight.value = data.height;
                    }
                }
            });
        }

        return {
            diaryData,
            photoData,
            photoIndex,
            maxheight
        }
      }
   }
</script>