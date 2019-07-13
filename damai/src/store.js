import Vue from 'vue'
import Vuex from 'vuex'
import {
  log
} from 'util';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userAddress: [{
        id: 1,
        name: "葵司",
        phone: 19071458647,
        addres: "广东省广州市天河区元岗街道天河区圆钢街到11654654",
        iddefault: true,
        selecred: true
      },
      {
        id: 2,
        name: "光头强",
        phone: 15651458647,
        addres: "海尔博市青葵第三季度谁看得见就囧深林55号9999999999",
        iddefault: false,
        selecred: false
      },
      {
        id: 3,
        name: "李青",
        phone: 188222458647,
        addres: "英雄联盟王者峡谷救世华佗之龙的传人666666666",
        iddefault: false,
        selecred: false
      }
    ],
    isSelected: '',
  },
  mutations: {
    select(state, id) {

      state.userAddress.forEach(element => {
        element.selecred = false;

      });
      state.userAddress[id - 1].selecred = true;
      state.isSelected = state.userAddress[id - 1]


    },
  },
  actions: {

  }
})