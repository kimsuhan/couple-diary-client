<style scoped>
* {
    font-size:16px;
}
</style>

<template>
    <!-- Content 영역 -->
    <div class="bg-white flex flex-col" v-if="letter !== undefined">
        <!-- Profile 영역 -->
        <div class="flex flex-row ml-2 mt-2">
            <img src="@/assets/suhan.jpeg" class="w-8 h-8 rounded-full"/>
            <div class="flex flex-col  mt-1 ml-1">
                <p class="font-bold text-[15px]">
                    {{letter.USER_NAME}}
                </p>
                <p class="font-light text-[11px]">
                    {{letter.ANNIVERSARY_DATE}}•{{letter.ANNIVERSARY_NAME}}
                </p>
            </div>
        </div>

        <!-- Content 영역 -->
        <div class="mx-2 my-1" style="white-space:pre-line">
            {{letter.ANNIVERSARY_LETTER_THUMB}}<br/>
            <a @click="contentView = !contentView" class="text-blue-500 text-[14px]" v-if="!contentView">
                더 보기
            </a>
            <Transition>
                <p v-if="contentView" @click="contentView = !contentView">
                    {{letter.ANNIVERSARY_LETTER}}
                </p>
            </Transition>
        </div>

        <!-- Video 영역 -->
        <div>
            <video controls playsinline preload="metadata" poster class="w-full">
                <source :src="'/v1/file/' + letter.ANNIVERSARY_VIDEO + '#t=0.001'" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </div>

        <!-- Video Footer 영역 -->
        <!-- <div class="bg-gray-100 border-b pl-1.5 pt-0.5">
            <p class="text-gray-400" style="font-size:12px; margin-bottom:-2px;">동영상</p>
            <p class="font-bold my-1 text-[13px]">1주년 영상 편지</p>
            <p class="text-gray-400" style="font-size:13px; margin-top:-2px;">뭐든 써봐</p>
        </div> -->

        <!-- Like 영역 -->
        <div>
            <i class="fa fa-heart text-red-500 ml-2 my-2"></i>
            9,999개
        </div>

        <!-- Footer Button 영역 -->
        <div class="border-t border-b flex flex-row justify-center content-center text-center">
            <div class="flex-auto my-1">
                <i class="far fa-heart"></i>
                    좋아요
            </div>
            <div class="flex-auto my-1">
                <i class="far fa-comment-dots"></i>
                    댓글 달기
            </div>
            <div class="flex-auto my-1">
                <i class="fa fa-share"></i>
                공유하기
            </div>
        </div>
    </div>
</template>

<script>

import { ref } from 'vue';

export default {
    name: 'LetterCard',
    props: ['letter'],
    setup() {
        const contentView = ref(false);

        return {
            contentView
        };
    }
};

</script>