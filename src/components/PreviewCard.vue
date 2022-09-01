<template>
    <div class="flex flex-col overflow-hidden border">
        <router-link :to="{ name: 'diary', params: { diaryNo: diary.DIARY_NO }}" class="bg-white grow flex justify-center">
            <img :src="'v1/file/' + diary.PHOTO_SRC" class="p-1 h-auto object-contain"/>
        </router-link>
        <div class="flex bg-white text-black w-full px-1">
            <label class="text-[13px] grow">{{diary.DIARY_DATE}}</label>
            <label class="text-[13px]">D-{{diary.DDAY}}</label>
        </div>
    </div>
</template>

<script>
export default {
    name:'PreviewCard',
    props: ['diary'],
    setup() {
    },
}
</script>

<style scoped>
    .date-border {
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    }
</style>