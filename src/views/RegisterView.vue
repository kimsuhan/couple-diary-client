<template>
    <div class="h-[50px] bg-white flex shadow-sm fixed top-0 w-screen items-center justify-center" style="z-index: 1;">

        <router-link to="login" class="absolute left-0 pl-4">
            <i class="fa fa-chevron-left"></i>
        </router-link>
        <div class="text-center">
            <div class="text-xs cdiary-font-color cdiary-font-family">Couple Diary</div>
            <div class="">회원 가입</div>
        </div>
    </div>

    <form class="bg-white h-screen px-4 pt-[70px]" @submit.prevent="register">
        <div class="mb-3">
            <label for="inputID" class="form-label text-sm">아이디</label>
            <input type="text" class="form-control" id="inputID" v-model="registerData.id" required>
        </div>
        
        <div class="mb-3">
            <label for="inputPassword" class="form-label text-sm">비밀번호</label>
            <div class="input-group mb-3">
                <input type="password" class="form-control" aria-describedby="inputPassword" v-model="registerData.password" required>
                <span class="input-group-text bg-white" id="inputPassword">
                    <i class="fa fa-lock"></i>
                </span>
            </div>
        </div>

        <div class="mb-3">
            <label for="inputPasswordCheck" class="form-label text-sm">비밀번호 확인</label>
            <div class="input-group mb-3">
                <input type="password" class="form-control" aria-describedby="inputPasswordCheck" v-model="referenceData.passwordCheck" required>
                <span class="input-group-text bg-white" id="inputPasswordCheck">
                    <i class="fa fa-check"></i>
                </span>
            </div>
        </div>

        <div class="mb-3">
            <label for="inputName" class="form-label text-sm">이름</label>
            <input type="text" class="form-control" id="inputName" v-model="registerData.name" required>
        </div>

        <div class="mb-3">
            <label for="inputBirthday" class="form-label text-sm">생년월일</label>
            <input type="date" class="form-control" id="inputBirthday" v-model="registerData.birthday" required>
        </div>

        <div class="mb-3">
            <label for="inputCoupleId" class="form-label text-sm">커플 ID</label>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="상대방의 커플 ID를 입력해주세요." v-model="registerData.couple_id" v-bind:disabled="referenceData.hasCoupleId">
                <button class="btn btn-secondary cdiary-bg-color border-0" type="button" id="inputCoupleId" data-bs-toggle="modal" data-bs-target="#exampleModal" v-bind:disabled="referenceData.hasCoupleId">
                    <i class="fa fa-search"></i>
                </button>
            </div>

            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" v-model="referenceData.hasCoupleId" @change="checkHasCoupleId()">
                <label class="form-check-label" for="flexSwitchCheckDefault">상대방과 연결 없이 시작하겠습니다.</label>
            </div>
        </div>

        <div class="input-group mt-5">
            <button class="form-control btn btn-secondary border-0 cdiary-bg-color" type="submit"> 회원가입 </button>
        </div>
    </form>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <button class="btn-close text-[10px] p-0 " data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="grid content-center justify-center text-center">
                        <img src="@/assets/logo.png" class="rounded-circle border-solid border-2 border-gray-300 mb-1 mx-auto" style="width:100px;height:100px;"/>
                        <label>조민수</label>

                        <a class="text-xs text-blue-500 mt-1.5" data-bs-dismiss="modal" aria-label="Close">연결하기</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive } from 'vue'
import { notify } from "@kyvg/vue3-notification";
import axios from '@/utils/axios.js';

export default {
    name: 'RegisterView',
    setup() {
        // 회원가입 데이터
        const registerData = reactive({
            id: '',
            password: '',
            name: '',
            birthday: '',
            couple_id: undefined,
        });

        // 참조용 데이터
        const referenceData = reactive({
            passwordCheck: '',
            hasCoupleId: false,
        });

        const register = async () => {
            await axios.postData('/v1/user/register', registerData).then(response => {
                if(response.status === 201) {
                    console.log(response);
                }
            }).catch((e) => {
                if(e.response.data && e.response.data.message) {
                    notify({type: 'error', text: e.response.data.message});
                } else {
                    notify({type: 'error', text: e.message});
                }
            });
        }

        const checkHasCoupleId = () => {
            if(referenceData.hasCoupleId) {
                registerData.couple_id = undefined;
            }
        }

        return {
            registerData,
            referenceData,
            register,
            checkHasCoupleId,
        }
    }
}
</script>