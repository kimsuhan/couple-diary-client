<template>
    <div class="h-[50px] bg-white flex shadow-sm fixed top-0 w-screen items-center justify-center" style="z-index: 999;">
        <router-link to="login" class="absolute left-0 pl-4" ref="backButton">
            <i class="fa fa-chevron-left"></i>
        </router-link>
        <div class="text-center">
            <div class="text-xs cdiary-font-color cdiary-font-family">Couple Diary</div>
            <div class="">회원 가입</div>
        </div>
    </div>

    <form class="bg-white px-4 pt-[70px]" @submit.prevent="register">
        <div class="mb-3">
            <label for="inputID" class="form-label text-sm">아이디</label>
            <div class="input-group has-validation">
                <input type="text" class="form-control" id="inputID" v-model="registerData.id" required :class="referenceData.formValidCheck ? (referenceData.idValid ? 'is-valid' : 'is-invalid') : ''">
                <div id="validationServer03Feedback" class="invalid-feedback">
                    영문자로 시작하는 영문자 또는 숫자 6~20자
                </div>
            </div>
            <div class="form-text" v-if="!referenceData.formValidCheck">영문자로 시작하는 영문자 또는 숫자 6~20자</div>
        </div>
        
        <div class="mb-3">
            <label for="inputPassword" class="form-label text-sm">비밀번호</label>
            <div class="input-group has-validation">
                <input type="password" class="form-control" id="inputPassword" v-model="registerData.password" required  :class="referenceData.formValidCheck ? (referenceData.passwordValid ? 'is-valid' : 'is-invalid') : ''">
                <div id="validationServer03Feedback" class="invalid-feedback">
                    문자, 숫자, 특수문자를 하나 이상 사용한 8자 이상
                </div>
            </div>
            <div class="form-text" v-if="!referenceData.formValidCheck">문자, 숫자, 특수문자를 하나 이상 사용한 8자 이상</div>
        </div>

        <div class="mb-3">
            <label for="inputPasswordCheck" class="form-label text-sm">비밀번호 확인</label>
            <div class="input-group has-validation">
                <input type="password" class="form-control" id="inputPasswordCheck" v-model="referenceData.passwordCheck" required  :class="referenceData.formValidCheck ? (referenceData.passwordCheckValid ? 'is-valid' : 'is-invalid') : ''">
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
            <label for="inputCoupleId" class="form-label text-sm">
                커플 ID
            </label>
            <div class="input-group mb-3" v-show="!referenceData.hasCoupleId">
                
                <div class="input-group has-validation">
                    <input type="text" class="form-control" placeholder="상대방의 ID를 입력해주세요." v-model="referenceData.findCoupleId" v-bind:disabled="referenceData.coupleIdValid" :class="referenceData.formValidCheck ? (referenceData.coupleIdValid ? 'is-valid' : 'is-invalid') : ''" :required="!referenceData.hasCoupleId">
                    <button class="btn btn-secondary cdiary-bg-color border-0" type="button" id="inputCoupleId" data-bs-toggle="modal" data-bs-target="#exampleModal" v-bind:disabled="referenceData.coupleIdValid || referenceData.findCoupleId.length <= 0" @click="findCoupleId()">
                        <i class="fa fa-search"></i>
                    </button>
                    <div id="validationServer03Feedback" class="invalid-feedback">
                        연결하려는 상대방 ID를 입력 후 검색 버튼을 눌러주세요.
                    </div>
                </div>
                <div class="form-text" v-if="!referenceData.formValidCheck">연결하려는 상대방 ID를 입력 후 검색 버튼을 눌러주세요.</div>
            </div>

            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" v-model="referenceData.hasCoupleId" @change="checkHasCoupleId()">
                <label class="form-check-label" for="flexSwitchCheckDefault">상대방과 연결 없이 시작하겠습니다.</label>
            </div>
        </div>

        <div class="input-group mt-5">
            <button class="form-control btn btn-danger border-0 cdiary-bg-color" type="submit"> 회원가입 </button>
        </div>
    </form>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-body">
                    <div v-if="referenceData.findLoad == true" class="py-5">
                        <div class="animate-pulse flex space-x-4">
                            <div class="rounded-full bg-slate-200 h-10 w-10"></div>
                                <div class="flex-1 space-y-6 py-1">
                                <div class="h-2 bg-slate-200 rounded"></div>
                                <div class="space-y-3">
                                    <div class="grid grid-cols-3 gap-4">
                                    <div class="h-2 bg-slate-200 rounded col-span-2"></div>
                                    <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                                    </div>
                                    <div class="h-2 bg-slate-200 rounded"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="grid content-center justify-center text-center gap-2" v-if="referenceData.findLoad == false && referenceData.findData.id !== ''">
                        <img src="@/assets/user-placeholder.png" class="rounded-circle border-solid border-2 border-gray-300 mb-1 mx-auto" style="width:100px;height:100px;"/>
                        <label>{{referenceData.findData.name}}</label>
                        <label>{{referenceData.findData.birthday.substr(0, 10)}}</label>

                        <a class=" text-blue-500 mt-1.5" data-bs-dismiss="modal" aria-label="Close" @click="setCoupleData('setting')">이 사람이 맞아요!</a>
                        <a class="text-xs text-red-500 mt-1.5" data-bs-dismiss="modal" aria-label="Close" @click="setCoupleData('reset')">누군지 모르겠어요.</a>
                    </div>
                    <div class="flex flex-col text-center py-3" v-if="referenceData.findLoad == false && referenceData.findData.id === ''" data-bs-dismiss="modal" aria-label="Close">
                        <i class="fa fa-circle-question text-8xl text-red-500 animate-bounce"> </i>
                        <label> 상대방을 못 찾았어요! </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, watch } from 'vue'
import { notify } from "@kyvg/vue3-notification";
import axios from '@/utils/axios.js';
import alert from '@/utils/alert';

export default {
    name: 'RegisterView',
    components: {
    },
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

            formValidCheck : false,
            idValid: false,
            passwordValid: false,
            passwordCheckValid: false,
            coupleIdValid: false,

            findCoupleId: '',
            findLoad: false,
            findData: {
                id: '',
                name: '',
                birthday: ''
            },
        });

        // Id Watch
        watch(() => registerData.id, (newValue) => {
            const regExp = /^[a-z]+[a-z0-9]{5,19}$/g;
            if(!regExp.test(newValue)) {
                referenceData.idValid = false;
                return;
            }

            referenceData.idValid = true;
        });

        // Password Watch
        watch(() => registerData.password, (newValue) => {
            referenceData.passwordCheck = '';

            const regExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
            if(!regExp.test(newValue)) {
                referenceData.passwordValid = false;
                return;
            }

            referenceData.passwordValid = true;
        });

        // Password Check Watch
        watch(() => referenceData.passwordCheck, (newValue) => {
            if(newValue !== registerData.password) {
                referenceData.passwordCheckValid = false;
                return;
            }

            referenceData.passwordCheckValid = true;
        });

        // 회원가입 Function
        const register = async () => {
            referenceData.formValidCheck = true;
            if(!referenceData.idValid || !referenceData.passwordValid || !referenceData.passwordCheckValid || !referenceData.coupleIdValid) {
                notify({type: 'error', text: '입력폼을 다시 한번 더 확인해주세요.'});
                return;
            }

            if(referenceData.findData.id !== '') {
                registerData.couple_id = referenceData.findData.id;
            }
            
            await axios.postData('/v1/user/register', registerData).then(response => {
                if(response.status === 201) {
                    alert.showSuccess('가입해주셔서 고마워요 😍', 'login');
                }
            }).catch((e) => {
                if(e.response.data && e.response.data.message) {
                    notify({type: 'error', text: e.response.data.message});
                } else {
                    notify({type: 'error', text: e.message});
                }
            });
        }

        // Couple ID 입력 Check
        const checkHasCoupleId = () => {
            if(referenceData.hasCoupleId) {
                registerData.couple_id = undefined;
                referenceData.findCoupleId = '';
                referenceData.coupleIdValid = true;
            }
            else {
                referenceData.coupleIdValid = false;
            }
        }

        // Couple ID Find
        const findCoupleId = async () => {
            referenceData.findLoad = true;

            await axios.getData(`/v1/user/${referenceData.findCoupleId}`, []).then(response => {
                if(response.status === 200) {
                    referenceData.findData = response.data;
                }
                else {
                    setCoupleData('reset');
                }
            }).catch((e) => {
                if(e.response.data && e.response.data.message) {
                    notify({type: 'error', text: e.response.data.message});
                } else {
                    notify({type: 'error', text: e.message});
                }
            }).finally(() => {
                referenceData.findLoad = false;
            });
        }

        // CoupleData Setting
        const setCoupleData = (state) => {
            if(state === 'reset') {
                referenceData.findData = {
                    id: '',
                    name: '',
                    birthday: ''
                }

                referenceData.coupleIdValid = false;
            }
            else if(state === 'setting') {
                referenceData.coupleIdValid = true;
            }
        }

        return {
            registerData,
            referenceData,
            register,
            checkHasCoupleId,
            findCoupleId,
            setCoupleData,
        }
    }
}
</script>