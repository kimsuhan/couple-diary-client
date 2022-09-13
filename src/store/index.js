import { createStore } from 'vuex';
import { Alert } from '@/store/Alert';
import { Diary } from '@/store/Diary';
import { Auth } from '@/store/Auth';
import createPersistedState from 'vuex-persistedstate';

export default createStore({
   modules: { Diary, Auth, Alert },
	plugins: [createPersistedState({
        paths: ["Auth"]
    })]
})