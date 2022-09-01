<template>
    <div class="flex flex-col gap-1 bg-gray-200 pb-[66px]">
        <LetterCard :letter='threeData' />
        <LetterCard :letter='twoData' />
        <LetterCard :letter='oneData' />
    </div>
</template>

<script>
import { reactive } from 'vue';
import LetterCard from '@/components/LetterCard.vue'

export default {
    name: 'LetterView',
    components: {
        LetterCard,
    },
    setup() {
        const oneData = reactive({
            USER_NAME: '김수한',
            USER_PHOTO: '/profile/SUHAN',
            ANNIVERSARY_DATE: '2020-08-31',
            ANNIVERSARY_NAME: '1주년',
            ANNIVERSARY_LETTER_THUMB: '1주년이당',
            ANNIVERSARY_LETTER: '여기 편지는 못 찾음크크',
            ANNIVERSARY_THUMBNAIL: '/anniversary/one.jpg',
            ANNIVERSARY_VIDEO: '/videos/one.mov',
        });

        const twoData = reactive({
            USER_NAME: '김수한',
            USER_PHOTO: '/profile/SUHAN',
            ANNIVERSARY_DATE: '2021-08-31',
            ANNIVERSARY_NAME: '2주년',
            ANNIVERSARY_LETTER_THUMB: '안녕 연화야! 이번엔 이렇게 모바일로 만나게 됐네',
            ANNIVERSARY_LETTER: '나는 매 주년마다 단순한 기념일이 아닌, 우리의 지난 1년을 돌아보는 계기가 됐으면 좋겠다는 생각을 해\n\n지난 날의 서로에게 한 실수같은 걸 돌아보거나 지나왔던 시간을 돌아보면서 변하지 말아야지 하는 다짐을 하는 그런 계기가 됐으면 좋겠어서 만들어 봤어\n\n나는 이렇게 만들면서 지난 사진들, 그리고 그때 느꼇던 감정등을 다시 느끼고 연화는 내가 만든 결과물을 보면서 내가 느낀 감정을 느끼고 !\n\n이렇게 만들다 보니 코로나 때문에 별거 안해도 빨리 시간이 갔다고 느꼇던 지난 1년이 생각보다 우리가 같이 보낸 시간들이 많더라 여기도 가보고 저기도 가보고...\n\n한참 멀게만 느껴지던 2년이 이렇게 금방 지나가버렸네\n\n1주년때 영상편지를 만들때랑 지금 달라진게 있다면 우리가 많이 성숙해졌다는거 같아. 금전적으로도 많이 성숙해졌고, 서로에게 향하는 마음도 많이 성숙해졌다는게 많이 느껴졌어 이렇게 어른이 되나봐ㅋㅋ\n\n우리 또 3주년을 위해 열심히 추억을 쌓아보자. 그리고 스스로 약속하자! 바쁘더라도 서로에게 소홀해지지 않기, 익숙해져서 상처주지 말기, 서로에게 듬직한 연인이 되어서 힘들땐 서로 의지가 되어주는 그런 연인이 되자\n\n항상 사랑하고 고마워 연화야',
            ANNIVERSARY_THUMBNAIL: '/anniversary/one.jpg',
            ANNIVERSARY_VIDEO: '/videos/two.mp4',
        });

        const threeData = reactive({
            USER_NAME: '김수한',
            USER_PHOTO: '/profile/SUHAN',
            ANNIVERSARY_DATE: '2022-08-31',
            ANNIVERSARY_NAME: '3주년',
            ANNIVERSARY_LETTER_THUMB: '연화야 안녕!?',
            ANNIVERSARY_LETTER: '작년에 만들어줬던 앱이 공식 스토어에 올라가지 못해서 기간이 지나면 삭제되는 문제때문에 이번엔 그럴일 없는거로 만들어 봤어 \n\n 없어지니까 연화가 은근 서운해 하는거 같더라고~~ \n\n 본래 계획했던 것 보단 기능이 많이 축소되긴 했지만.. 아무튼!\n\n 올해도 이렇게 우리가 같이 찍은사진들을 둘러보니까 감회가 새롭더라 작년보다 더 뭔가 울컥하더라고 \n\n 그러고 겸사겸사 작년, 재작년에 만들었던 영상편지까지 보니까 우리 많이 늙었다..!\n\n 아무래도 우리가 나이도 나이지만 정신적으로 같이 성장한걸 쭉 본 느낌이였어 연화도 시간이난다면 한번 다시 보면 좋을 것 같아\n\n 내가 1주년때도 결혼얘기를 하고있더라고!? 그때는 장난이였지만 지금은 거의 반현실이된 주제이기도 하고 이런걸 미루어 보았을때 우리가 참 많이 컸구나 라는 생각을 한거 같아\n\n 근데 그거알아? 2주년때도 위와 같은얘기를 했다는거 근데 지금 시점으로 2주년을 돌아보면 우린 그때보다 더 많이 성장했다는게 느껴져\n\n 벌써 세번째가 되고 돌아보니까 뭐든 만들고 기록해두니까 너무 좋다. 내 생각은 틀리지 않았던 것 같아. 남들이 보면 열심히다 라는 말이 나올정도로 밤새 만들고있어~~! 맞아. 생색이야 ㅎㅎ \n\n 이번 영상의 주제는 “힘들어도 나를 보고 힘내자!” 조금은 노래가 우울하게 들릴지도 모르겠지만 듣다보면 힘이되더라고 영상 만들면서 수십번은 더 듣긴 했지만.. 맘에 들었으면 좋겠다!\n\n 연화야, 4주년까지 다시 한번 더 힘내서 같이 걸어가자! 사랑해',
            ANNIVERSARY_THUMBNAIL: '/anniversary/one.jpg',
            ANNIVERSARY_VIDEO: '/videos/three.mp4',
        });

        return {
            oneData,
            twoData,
            threeData
        }
    }
};
</script>

<style scoped>
* {
  font-size:16px;
}
</style>