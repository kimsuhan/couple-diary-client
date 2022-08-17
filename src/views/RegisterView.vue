<template>
    <nav class="navbar bg-light">
        <div class="py-0 my-0 container-fluid">
            <a class="navbar-brand">Register</a>
            <div class="flex gap-1">
                <span class="badge rounded-pill" :class="' text-bg-' + (steps === 1 ? 'success' : 'secondary')">1</span>
                <span class="badge rounded-pill" :class="' text-bg-' + (steps === 2 ? 'success' : 'secondary')">2</span>
                <span class="badge rounded-pill" :class="' text-bg-' + (steps === 3 ? 'success' : 'secondary')">3</span>
            </div>
        </div>
    </nav>

    <div class="flex justify-center mt-3">
        <div class="grid gap-3">
            <div class="flex flex-wrap px-4 gap-3" v-show="steps === 1">
                <div class="w-[100%]">
                    <label for="idInput" class="mb-0 form-label text-xs">ID</label>
                    <input type="text" class="form-control h-6" id="idInput">
                </div>

                <div class="w-[100%]">
                    <label for="passwordInput" class="mb-0 form-label text-xs">Password</label>
                    <input type="password" class="form-control h-6" id="passwordInput">
                </div>

                <div class="w-[100%]">
                    <label for="passwordCheckInput" class="mb-0 form-label text-xs">Password Check</label>
                    <input type="password" class="form-control h-6" id="passwordCheckInput">
                </div>

                <div class="w-[100%]">
                    <label for="nameInput" class="mb-0 form-label text-xs">Name</label>
                    <input type="text" class="form-control h-6" id="nameInput">
                </div>

                <div class="fixed bottom-0 left-0 flex justify-between w-screen px-6 py-3">
                    <button type="button" class="btn btn-primary btn-block" @click="steps--">
                        <i class="fa-solid fa-backward"></i>
                    </button>
                    <button type="button" class="btn btn-primary btn-block" @click="steps++">
                        <i class="fa-solid fa-forward"></i>
                    </button>
                </div>
            </div>

            <div class="flex flex-wrap px-4 gap-3" v-show="steps === 2">
                <div class="fixed bottom-0 left-0 flex justify-between w-screen px-6 py-3">
                    <button type="button" class="btn btn-primary btn-block" @click="steps--">
                        <i class="fa-solid fa-backward"></i>
                    </button>
                    <button type="button" class="btn btn-primary btn-block" @click="steps++">
                        <i class="fa-solid fa-forward"></i>
                    </button>
                </div>
            </div>

            <div class="flex flex-wrap px-4 gap-3" v-show="steps === 3">
                <div class="fixed bottom-0 left-0 flex justify-between w-screen px-6 py-3">
                    <button type="button" class="btn btn-primary btn-block" @click="steps--">
                        <i class="fa-solid fa-backward"></i>
                    </button>
                    <button type="button" class="btn btn-primary btn-block" @click="steps++">
                        <i class="fa-solid fa-forward"></i>
                    </button>
                </div>
            </div>
        </div>
<!--
        <div class="grid gap-3" v-show="steps === 2">
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Search ID" aria-label="Search ID" aria-describedby="button-addon2">
                <button class="btn btn-outline-secondary" type="button" id="button-addon2">
                    <i class="fa fa-search fa-xs"> </i>
                </button>
            </div>

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">ID</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody class="table-group-divider">
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table>


            <button type="button" class="btn btn-primary btn-block w-[100%] mt-4" @click="steps++">
                Next Stap
            </button>
        </div> -->
    </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'RegisterView',
  setup() {
    const steps = ref(1);

    return {
        steps
    }
  }
}
</script>

<style scoped>
* {
    font-size:18px;
}
</style>