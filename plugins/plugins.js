import Vue from 'vue'
import Vuex from 'vuex'
import vueDebounce from 'vue-debounce'
import Paginate from "vuejs-paginate";
import vSelect from 'vue-select'

Vue.component('v-select', vSelect)

Vue.component("paginate", Paginate);
Vue.use(vueDebounce, {
  listenTo: 'click',
  defaultTime: '500ms',
})
Vue.use(Vuex)
