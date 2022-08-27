<template>
    <nav class="navbar bg-gray-300">
        <div class="py-0 my-0 grid container-fluid">
            <a class="navbar-brand text-xs">2022년 01월</a>
            <div class="flex gap-1">
                <button>
                    <i class="fa fa-refresh"></i>
                </button>
            </div>
        </div>
    </nav>
    <section class="px-3 py-2 pb-[108px]">
        <div class="grid grid-cols-2 gap-2">
            <PreviewCard :date="item.DIARY_DATE" :thumbnail="item.PHOTO_SRC" v-for="item in diaryData" v-bind:key="item.diary_no"></PreviewCard>
        </div>
    </section>
</template>

<script>
import PreviewCard from '@/components/PreviewCard.vue';
import axios from '@/utils/axios.js';
import { ref } from 'vue';

export default {
    name: 'HomeView',
    components: {
        PreviewCard,
    },
    setup() {
        let cnt = ref(0);
        let diaryData = ref([]);

                axios.getData('/v1/diary').then((data) => {
                    diaryData.value = data.data;
                    console.log(diaryData.value);
                });

        return {
            diaryData,
            cnt
        }
    },
}
</script>
