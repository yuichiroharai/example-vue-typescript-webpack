import Vue from 'vue';
import App from '../vue/App.vue';
// import {Example} from "./Example";

// new Example();

new Vue({
    components: {
        "app": App
    },
    data: {
        obj: {
            title: "this is a title.",
            description: "this is a description.",
        }
    },
}).$mount("#app");