import { createStore } from 'vuex';
import { Diary } from '@/store/Diary';
import { Auth } from '@/store/Auth';
import createPersistedState from 'vuex-persistedstate';

export default createStore({
   modules: { Diary, Auth },
	plugins: [createPersistedState({
        paths: ["Auth"]
    })]
})