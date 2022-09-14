<template>
    <!-- Simple Loading -->
    <div class="fixed top-0 h-1 w-full cdiary-bg-color  flex animate-pulse" style="z-index:99999999;" v-if="data.showPopup && data.alertType === 'simple'">
    </div>

    <!-- Detail Alert -->
    <Transition v-if="data.showPopup && data.alertType !== 'simple'">
        <div class="fixed flex justify-center h-screen w-full left-0 right-0 bottom-0 " style="z-index:99999999; background-color: rgba(0, 0, 0, 0.5);" @click="clickAlert()">
            <div class="flex flex-wrap bg-white w-[300px] h-[300px] rounded-3xl self-center border-gray-300 border-solid border-2 drop-shadow-lg">
                <div class="success-checkmark self-center text-center" v-if="data.alertType === 'loading'">
                    <i class="fa fa-circle-notch animate-spin text-7xl cdiary-font-color mt-3"></i>
                </div>
                <div class="success-checkmark self-center text-center" v-if="data.alertType === 'error'">
                    <i class="absolute fa-solid animate-ping fa-circle-exclamation text-7xl text-red-500 mt-3"></i>
                    <i class="fa-solid fa-circle-exclamation text-7xl text-red-500 mt-3"></i>
                </div>
                <div class="success-checkmark self-center" v-if="data.alertType === 'success'">
                    <div class="check-icon mt-3">
                        <span class="icon-line line-tip"></span>
                        <span class="icon-line line-long"></span>
                        <div class="icon-circle"></div>
                        <div class="icon-fix"></div>
                    </div>
                </div>
                <p class="w-full text-center text-1xl"> {{data.alertMessage}} </p>
            </div>
        </div>
    </Transition>
</template>

<script>
import { computed, reactive, ref } from 'vue';
import { useStore } from 'vuex';
import alert from '@/utils/alert';
import { useRouter } from 'vue-router';

export default {
    name:'AlertComponent',
    props: [],
    setup() {
        const router = useRouter();
        const store = useStore();
        const data = reactive({
            showPopup: computed(() => store.getters['Alert/getShow']),
            alertType: computed(() => store.getters['Alert/getStatus']),
            alertMessage: computed(() => store.getters['Alert/getMessage']),
            nextPage: computed(() => store.getters['Alert/getNext']),
        });

        const input = ref(null);
        const clickAlert = () => {
            if(data.alertType === 'loading') {
                return;
            }

            if(data.nextPage && data.nextPage !== '') {
                router.push({
                    name: data.nextPage,
                });
            }

            alert.hideAlert();
        }

        return {
            data,
            clickAlert,
            input
        }
    },
}
</script>

<style scoped>
</style>