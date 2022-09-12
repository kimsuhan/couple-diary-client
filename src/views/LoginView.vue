<template>
    <form class="bg-white h-screen flex flex-col justify-center content-center items-center text-center truncate" @submit.prevent="login">
        <!-- <div class="grid gap-3"> -->
            <div class="">
                <img class="w-32" src="@/assets/diary.png" />
            </div>
            <div class="logo-8 mb-10 mt-3">
                <h3 class="cdiary-font-color cdiary-font-family">Couple Diary</h3>
            </div>

            <div class=" input-group mb-3 px-4">
                <span class="input-group-text bg-white" id="basic-addon1"><i class="fa fa-user text-gray-400"></i></span>
                <input type="text" class="form-control text-sm" placeholder="아이디" aria-label="Username" aria-describedby="basic-addon1" v-model="loginData.id" required>
            </div>

            <div class=" input-group mb-3 px-4">
                <span class="input-group-text bg-white" id="basic-addon2"><i class="fa fa-lock text-gray-400"></i></span>
                <input type="password" class="form-control  text-sm" placeholder="비밀번호" aria-label="Password" aria-describedby="basic-addon2" v-model="loginData.password" required>
            </div>

            <div class=" input-group mb-3 px-4">
                <button class="form-control btn btn-primary border-0 cdiary-bg-color" type="submit"> 로그인 </button>
            </div>

            <div class="input-group mb-3 px-4">
                <div class="flex flex-row justify-center items-center w-full gap-2">
                    <a class="text-gray-400 text-sm">아이디 찾기</a>
                    <div class="w-[0.5px] h-5 bg-gray-500"></div>
                    <a class="text-gray-400 text-sm">비밀번호 찾기</a>
                    <div class="w-[0.5px] h-5 bg-gray-500"></div>
                    <router-link to="register" class="text-gray-400 text-sm">
                        회원 가입
                    </router-link>
                </div>
            </div>
    </form>
</template>

<script>
import { reactive } from 'vue'
import axios from '@/utils/axios.js';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
    name: 'LoginView',
    setup() {
        const store = useStore();
        const router = useRouter();

        const loginData = reactive({
            id: '',
            password: ''
        });

        const login = async () => {
            await axios.postData('/v1/user/login', loginData).then(response => {
                if (response.status === 201) {
                    store.dispatch("Auth/setAuthToken", response.data.token);
                    router.push({
                        name: 'home',
                    })
                }
            });
        }

        return {
            login,
            loginData,
        }
    }
}
</script>