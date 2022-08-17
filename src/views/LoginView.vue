<template>
    <div class="flex justify-center">
        <div class="grid gap-3">
            <div class="flex justify-center logo-8 my-10">
                <h3 class="text-green-600">Couple Diary</h3>
            </div>

            <div class="flex flex-wrap px-4 gap-3">
                <div class="w-[100%]">
                    <label for="idInput" class="mb-0 form-label text-xs">ID</label>
                    <input type="text" class="form-control h-6" id="idInput">
                </div>

                <div class="w-[100%]">
                    <label for="passwordInput" class="mb-0 form-label text-xs ">Password</label>
                    <input type="password" class="form-control h-6" id="passwordInput">
                </div>

                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="rememberMeCheck">
                    <label class="text-xs form-check-label" for="rememberMeCheck">
                        Remember Me
                    </label>
                </div>

                <button type="button" class="btn btn-primary btn-block w-[100%] mt-4" style="font-size:20px">Login</button>

                <div class="text-center w-[100%]">
                    <p class="text-xs">Not a member?
                        <router-link to="register">
                            <a class="text-xs">Register</a>
                        </router-link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'LoginView'
}
</script>

<style scoped>
/* Logo-8 */
.logo-8 h3 {
    font-family: 'Cinzel', serif;
    /* color: #e74c3c; */
    font-weight: 300;
    font-size: 30px;
    line-height:1.3;
}
</style>