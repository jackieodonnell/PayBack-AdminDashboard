import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    orderedUsers: [],
    loans: [],
    approvedLoans: [],
    pendingLoans: [],
    deniedLoans: [],
    avgUserRating: 0,
    showSidebar: false,
  },
  getters: {
  },
  mutations: {
    SET_USERS(state, users) {
      state.users = users;
      let countUsers = 0;
      let sumScore = 0;
      users.forEach((user) => {
          if (user.total_borrowing > 0){
              countUsers += 1;
              sumScore += (user.total_score / user.total_borrowing)
          }
      });
      state.avgUserRating = (sumScore / countUsers).toFixed(1);
      state.orderedUsers = users.sort((a, b) => {
        if (a.username.toLowerCase() < b.username.toLowerCase()){
          return -1;
        }
        if (a.username.toLowerCase() > b.username.toLowerCase()){
          return 1;
        }
        return 0;
      });
    },
    SET_LOANS(state, loans) {
      state.loans = loans;
      state.approvedLoans = loans.filter((loan) => {
        return (loan.status == "approved")
      });
      state.pendingLoans = loans.filter((loan) => {
        return (loan.status == "pending")
      });
      state.deniedLoans = loans.filter((loan) => {
        return (loan.status == "denied")
      });
    },
    TOGGLE_SIDEBAR(state) {
      if (state.showSidebar) {
        state.showSidebar = false;
      } else {
        state.showSidebar = true;
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
