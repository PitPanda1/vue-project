import { createApp } from 'vue';
import { createStore } from 'vuex';

import HelloWorld from './components/HelloWorld.vue';
import FooBar from './components/FooBar.vue';

import App from './App.vue';

const store = createStore({
    state() {
        return {
            count: 0
        }
    },
    mutations: {
        increment(state) {
            state.count++
        },
        
        reset(state) {
            state.count = 0;
        }
    }
});

const app = createApp(App);

app.component('HelloWorld', HelloWorld);
app.component('FooBar', FooBar);

app.use(store);
app.mount('#app')