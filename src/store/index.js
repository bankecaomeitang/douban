import Vue from 'vue';
import Vuex from 'vuex';

import chest from './modules/modules_chest';

Vue.use(Vuex);

export default new Vuex.Store({
	modules:{
		chest,
	}
});
