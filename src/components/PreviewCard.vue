<template>
    <div class="flex flex-col overflow-hidden">
        <router-link :to="{ name: 'diary', params: { diaryId: diary._id }}" class="bg-white grow flex justify-center">
            <img :src="'v1/file/' + diary.photos[0].src" class="h-auto object-cover"/>
        </router-link>
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