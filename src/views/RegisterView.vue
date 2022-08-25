<template>
    <nav class="navbar bg-light mb-3">
        <div class="py-0 my-0 container-fluid">
            <a class="navbar-brand">회원가입</a>
            <div class="flex gap-1">
                <span class="badge rounded-pill" :class="' text-bg-' + (viewData.steps === 1 ? 'primary' : 'secondary')">1</span>
                <span class="badge rounded-pill" :class="' text-bg-' + (viewData.steps === 2 ? 'primary' : 'secondary')">2</span>
                <span class="badge rounded-pill" :class="' text-bg-' + (viewData.steps === 3 ? 'primary' : 'secondary')">3</span>
            </div>
        </div>
    </nav>
    <div class="flex justify-center">

        <!-- Step 1 -->
        <div class="w-screen px-4" v-show="viewData.steps === 1">
            <label for="idInput" class="mb-0 form-label text-xs">ID</label>
            <input type="text" class="form-control h-6 mb-2" id="idInput" v-model="registerData.id">

            <label for="passwordInput" class="mb-0 form-label text-xs">Password</label>
            <input type="password" class="form-control h-6 mb-2" id="passwordInput" v-model="registerData.password">

            <label for="passwordCheckInput" class="mb-0 form-label text-xs">Password Check</label>
            <input type="password" class="form-control h-6 mb-2" id="passwordCheckInput" v-model="referenceData.passwordCheck">

            <label for="nameInput" class="mb-0 form-label text-xs">Name</label>
            <input type="text" class="form-control h-6 mb-2" id="nameInput" v-model="registerData.name">

            <label for="birthDayInput" class="mb-0 form-label text-xs">BirthDay</label>
            <input type="date" class="form-control h-6 text-xs" id="BirthDayInput" v-model="registerData.birthDay"/>

            <button class="btn btn-primary btn-sm form-control mt-3" @click="stepOneNext()">
                Next
            </button>
        </div>

        <!-- Step 2 -->
        <div class="w-screen px-4" v-show="viewData.steps === 2">
            <div v-show="referenceData.hasCoupleId === true">
                <div class="input-group mb-3">
                    <input type="text" class="form-control text-xs" placeholder="커플 ID를 입력해주세요.">
                    <button class="btn btn-outline-secondary text-xs" id="button-addon2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <i class="fa-solid fa-search text-xs"></i>
                    </button>
                </div>

                <div class="text-center">
                    <p class="text-xs">커플 ID가 없으신가요?
                        <a class="text-xs text-blue-500" @click="referenceData.hasCoupleId = !referenceData.hasCoupleId">커플등록하기</a>
                    </p>
                </div>
            </div>

            <div v-show="referenceData.hasCoupleId === false">
                <label for="startDateInput" class="mb-0 form-label text-xs">시작일</label>
                <input type="date" class="form-control h-6 text-xs" id="StartDayInput" v-model="registerData.coupleStartDate"/>

                <button class="btn btn-primary btn-sm form-control my-3" @click="stepTwoNext()">
                    Next
                </button>

                <div class="text-center">
                    <p class="text-xs">커플 ID가 생각나셨나요?
                        <a class="text-xs text-blue-500" @click="referenceData.hasCoupleId = !referenceData.hasCoupleId">ID 입력하기</a>
                    </p>
                </div>
            </div>
        </div>

        <!-- Step 3 -->
        <div class="grid place-content-center" v-show="viewData.steps === 3">
            <div class="grid bg-primary w-[150px] h-[150px] rounded-full text-center mx-auto animate-bounce mt-32">
                <i class="fa fa-check text-5xl my-auto text-white"></i>
            </div>

            <p class="mx-auto mt-4"> 성공적으로 가입하셨습니다.</p>
        </div>
    </div>

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
import { useFetch } from '../utils/fetch.js';


export default {
  name: 'RegisterView',
  setup() {
    // 회원가입 데이터
    const registerData = reactive({
        id: '',
        password: '',
        name: '',
        birthDay: '',
        coupleStartDate: '',
    });

    // 참조용 데이터
    const referenceData = reactive({
        passwordCheck: '',
        hasCoupleId: true,
    })

    // 화면 제어용 데이터
    const viewData = reactive({
        steps: 1,
    });

    // Function Line
    const stepOneNext = async () => {

        // Validation Check
        if(registerData.id === '') {
            notify({type: 'error', text: '⚠️ ID를 입력해주세요.'});
            return;
        }

        if(registerData.password === '') {
            notify({type: 'error', text: '⚠️ 비밀번호를 입력해주세요.'});
            return;
        }

        if(referenceData.passwordCheck === '') {
            notify({type: 'error', text: '⚠️ 비밀번호 확인을 입력해주세요.'});
            return;
        }

        if(registerData.password !== referenceData.passwordCheck) {
            notify({type: 'error', text: '⚠️ 비밀번호를 다시 확인해주세요.'});
            return;
        }

        if(registerData.name === '') {
            notify({type: 'error', text: '⚠️ 이름을 입력해주세요.'});
            return;
        }

        if(registerData.birthDay === '') {
            notify({type: 'error', text: '⚠️ 생일을 입력해주세요.'});
            return;
        }

        // 중복 ID 체크
        const {data, error} = await useFetch(`/v1/user/${registerData.id}`);

        if(error.value) {
            notify({type: 'error', text: error.value});
            return;
        }
        else if(data.value) {
            notify({type: 'error', text: '⚠️ 중복된 아이디입니다.'});
            return;
        }

        // TODO ID, 비밀번호 최소 규정은 만들기

        viewData.steps++;
    };

    const stepTwoNext = async () => {

        // Validation Check
        if(registerData.coupleStartDate === '') {
            notify({type: 'error', text: '⚠️ 커플 시작일을 입력해주세요.'});
            return;
        }
    };

    return {
        viewData,
        registerData,
        referenceData,
        stepOneNext,
        stepTwoNext
    }
  }
}
</script>

<style scoped>
</style>