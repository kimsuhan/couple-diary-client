<template>
    <router-link :to="{ name: 'diary', params: { diaryNo: diaryNo }}" class="flex rounded-xl relative overflow-hidden">
        <!-- <div class="flex rounded-xl relative overflow-hidden"> -->
        <img class="card-image" :src="'v1/file/' + thumbnail"/>
        <div class="px-1.5 py-0.5 absolute w-full bottom-0 text-right">
            <p class="text-[12px] text-white date-border mb-0">{{date}}</p>
        </div>
        <!-- </div> -->
    </router-link>
</template>

<script>
export default {
    name:'PreviewCard',
    props: ['date', 'thumbnail', 'diaryNo'],
    setup() {

    },
}
</script>

<style scoped>
.date-border {
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}

</style>