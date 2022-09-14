<template>
    <div class="fixed h-[50px] bg-white flex flex-row items-center w-screen shadow-sm">
        <div class="flex-1 grow text-left px-3">
            <select class="bg-white font-medium" style="">
                <option>2022년</option>
                <option>2021년</option>
                <option>2020년</option>
            </select>
        </div>

        <button class="flex-none px-3">
            <div class="flex flex-row justify-center items-center">
                <router-link to="add" class="border-2 rounded w-5 h-5 border-black items-center justify-center flex">
                    <i class="fa fa-plus"></i>
                </router-link>
                <div class="w-6 h-6 items-center justify-center flex ml-4">
                    <i class="far fa-heart text-xl"></i>
                </div>
                <div class="w-6 h-6 items-center justify-center flex ml-3">
                    <i class="fa fa-rotate-right text-xl" @click="getDiaryData('click')"></i>
                </div>
            </div>
        </button>
    </div>
    <section class="px-3 py-2 bg-white">
        <div class="flex h-screen justify-center items-center" v-if="diaryData.length === 0">
            <div class="border-[1px] rounded w-4 h-4 border-black items-center justify-center flex mr-0.5">
                <i class="fa fa-plus text-xs"></i>
            </div>
            <p>
                버튼을 클릭해서 다이어리를 등록해보세요.
            </p>
        </div>
        <div class="grid grid-cols-3 gap-1 pb-[65px] pt-[50px]" v-if="diaryData.length > 0">
            <PreviewCard :diary="item" v-for="item in diaryData" v-bind:key="item._id"></PreviewCard>
        </div>
    </section>
</template>

<script>
import PreviewCard from '@/components/PreviewCard.vue';
import { computed } from 'vue';
import { useStore } from 'vuex';
// import { notify } from "@kyvg/vue3-notification";

export default {
    name: 'HomeView',
    components: {
        PreviewCard,
    },
    setup() {
        const store = useStore();
        let diaryData = computed(() => store.getters['Diary/getData']);

        const getDiaryData = () => {
            store.dispatch("Diary/getServerData");
        }

        getDiaryData('onload');

        return {
            diaryData
            , getDiaryData
        }
    },
}
</script>
