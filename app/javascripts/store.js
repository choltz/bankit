import Vue       from 'vue';
import Vuex      from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    accounts:['test1']
  }
  //,
  // mutations: {
  //   increment (state) {
  //     state.count++;
  //   }
  // }
});
