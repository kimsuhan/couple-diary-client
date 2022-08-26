<template>
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
