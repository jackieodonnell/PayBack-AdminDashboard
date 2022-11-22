<template>
  <div class="dashboard">
    <loan-analytics />
    <transaction-approvals/>
    <user-analytics />
    <user-rating-avg />
  </div>
</template>

<script>
// @ is an alias to /src
import TransactionApprovals from '../components/TransactionApprovals.vue'
import LoanAnalytics from '../components/LoanAnalytics.vue'
import UserAnalytics from '../components/UserAnalytics.vue'
import UserRatingAvg from '../components/UserRatingAvg.vue'

export default {
  name: 'HomeView',
  components: {
    TransactionApprovals,
    LoanAnalytics,
    UserAnalytics,
    UserRatingAvg
  },
  data() {
    return {
    }
  }
}
</script>

<style>
.dashboard {
  background-color: rgb(236, 236, 236);
  box-shadow: 0 0 5px 5px rgba(97, 97, 97, 0.303);
  position: absolute;
  width: 91vw;
  height: 95vh;
  margin-left: 130px;
  margin-right: 0px;
  margin-top: -10px;
  left: 0;
  right: 0;
  text-align: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: flex-start;
  align-items: flex-start;
}

</style>

