import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import 'element-plus/dist/index.css'
createApp(App).use(ElementPlus).use(Antd).use(store).use(router).mount('#app')