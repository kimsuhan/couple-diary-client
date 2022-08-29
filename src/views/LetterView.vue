<template>
  <div class="flex flex-col gap-1 bg-gray-400">
    <div class="bg-white flex flex-col">
      <div class="flex flex-row ml-2 mt-2">
        <div class="border-2 border-blue-500 rounded-full w-8 h-8 border-solid grid place-content-center">
          <img src="@/assets/diary-icon.jpg" class="w-6 h-6"/>
        </div>
        <div class="flex flex-col  mt-1 ml-1">
          <p class="font-bold text-[15px]">
            노마드 코더 Nomad Coders
          </p>
          <p class="font-light text-[11px]">
            광고
          </p>
        </div>
      </div>
      <p class="ml-2 my-1">
        이게 진짜 다 무료에요?<br/>
        네, 전부 무료입니다~<br/>
        ...더 보기
      </p>
      <video-player :options="videoOptions"/>
      <div class="bg-gray-100 border-b pl-1.5 pt-0.5">
        <p class="text-gray-400" style="font-size:12px; margin-bottom:-2px;">nomardcoders.co</p>
        <p class="font-bold">무료 업데이트 2022 노마진코더</p>
        <p class="text-gray-400" style="font-size:13px; margin-top:-2px;">40만 유튜버랑 무료로 코딩 배우기</p>
      </div>
      <div>
        <i class="fa fa-thumbs-up text-blue-600 ml-2 mr-0.5 my-2"></i>
        4개
      </div>
      <div class="border-t flex flex-row justify-center content-center text-center">
        <div class="flex-auto my-1">
          <i class="far fa-thumbs-up"></i>
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
    <div class="bg-white flex flex-col pb-2">
      <label>
        asdfas
      </label>
      <video-player :options="videoOptions" class="grow"/>
    </div>
  </div>
</template>

<script>
import VideoPlayer from '@/components/VideoPlayer.vue';

export default {
  name: 'LetterView',
  components: {
    VideoPlayer
  },
  data() {
    return {
      videoOptions: {
        autoplay: false,
        controls: true,
        fluid: true,
        sources: [
          {
            src:
              '/v1/file/videos/sample.mp4',
              type: 'video/mp4',
          }
        ]
      }
    };
  }
};
</script>

<style scoped>
* {
  font-size:16px;
}
</style>