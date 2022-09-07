import { createStore } from 'vuex';
import { Counter } from '@/store/Counter';
import { moduleA } from '@/store/moduleA';

export default createStore({
   modules: { Counter, moduleA }
})