<template>
    <div>
        <button class="btn btn-primary" @click="logout()">
            Logout
        </button>
    </div>
</template>

<script>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
    name: 'ProfileView',
    setup() {
        const store = useStore();
        const router = useRouter();

        const logout = () => {
            store.dispatch("Auth/setAuthToken", undefined);
            router.push({
                name: 'login',
            })
        }

        return {
            logout
        };
    }
}
</script>