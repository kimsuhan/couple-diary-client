<template>
    <div class="flex rounded-xl relative overflow-hidden">
        <img class="card-image" :src="thumbnail"/>
        <div class="px-1.5 py-0.5 absolute w-full bottom-0 text-right">
            <p class="text-[12px] text-white date-border mb-0">{{date}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name:'PreviewCard',
    props: ['date', 'thumbnail'],
    setup() {

    },
}
</script>

<style scoped>
.date-border {
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}

</style>