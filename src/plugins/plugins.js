/*
* 利用Vue插件来增强Vue
* */
import {doGet, formPost, appJsonPost} from "@/network/request";

export default {
    install(Vue) {
        Vue.prototype.$doGet =doGet
        Vue.prototype.$formPost =formPost
        Vue.prototype.$appJsonPost =appJsonPost
    }
}