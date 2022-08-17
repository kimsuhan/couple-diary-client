<template>
    <section class="px-3 py-2 pb-[108px]">
        <div class="grid grid-cols-2 gap-2">
            <PreviewCard date="2020-01-02" thumbnail="https://picsum.photos/536"></PreviewCard>
            <PreviewCard date="2020-01-02" thumbnail="https://picsum.photos/535/354"></PreviewCard>
            <PreviewCard date="2020-01-02" thumbnail="https://picsum.photos/534/353"></PreviewCard>
            <PreviewCard date="2020-01-02" thumbnail="https://picsum.photos/533/352"></PreviewCard>
            <PreviewCard date="2020-01-02" thumbnail="https://picsum.photos/532/100"></PreviewCard>
            <PreviewCard date="2020-01-02" thumbnail="https://picsum.photos/531/300"></PreviewCard>
            <PreviewCard date="2020-01-02" thumbnail="https://picsum.photos/530/301"></PreviewCard>
            <PreviewCard date="2020-01-02" thumbnail="https://picsum.photos/599/311"></PreviewCard>
            <PreviewCard date="2020-01-02" thumbnail="https://picsum.photos/535/354"></PreviewCard>
            <PreviewCard date="2020-01-02" thumbnail="https://picsum.photos/534/353"></PreviewCard>
            <PreviewCard date="2020-01-02" thumbnail="https://picsum.photos/533/352"></PreviewCard>
            <PreviewCard date="2020-01-02" thumbnail="https://picsum.photos/532/100"></PreviewCard>
            <PreviewCard date="2020-01-02" thumbnail="https://picsum.photos/531/300"></PreviewCard>
            <PreviewCard date="2020-01-02" thumbnail="https://picsum.photos/530/301"></PreviewCard>
            <PreviewCard date="2020-01-02" thumbnail="https://picsum.photos/599/311"></PreviewCard>
        </div>
    </section>
</template>

<script>
import PreviewCard from '@/components/PreviewCard.vue';

export default {
    name: 'HomeView',
    components: {
        PreviewCard,
    },
    setup() {
        const items = [{
            width:100,
            height:100,
            id:'abcd'
        }];

        return {
            items
        }
    },
}
</script>
