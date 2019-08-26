<template>
  <div class="dashboard" style="background-color: ">
    <div style="height: 100px;">&nbsp;</div>
    <div style="padding-left: 200px; padding-right: 200px">
      <div class="text-center mb-3 mt-5">
        <!-- <h3>NFCard's Employee List</h3> -->
      </div>
      <div class="row">
        <div class="col-md-4">
          <EmployeeCard v-if="onShowCard" :employee="onShowCard" @closeShowCard="onShowCard = ''" />
        </div>
        <div :class=" onShowCard ? 'col-md-8' : 'col-md-12'">
          <table v-if="employees.length > 1" class="table table-hover" style="background-color: #fff">
            <thead>
                <tr>
                    <th scope="col"><p></p></th>
                    <th scope="col"><p style="color: #989EA1; font-size: 12px">NAME</p></th>
                    <th scope="col"><p style="color: #989EA1; font-size: 12px">POSITION</p></th>
                    <th scope="col"><p style="color: #989EA1; font-size: 12px">PHONE</p></th>
                    <th scope="col"><p style="color: #989EA1; font-size: 12px">EMAIL</p></th>
                    <th scope="col"><p style="color: #989EA1; font-size: 12px">PASSWORD</p></th>
                    <th scope="col">
                      <div class="d-flex align-items-center justify-content-center" style="background-color: #fff; border-radius: 50%; border: 1px solid #D6D8DA; height: 25px; width: 25px; cursor: pointer;">
                        <div style="font-size: 12px"><i class="fas fa-plus" style="color: #979EA1"></i></div>
                      </div>
                    </th>
                </tr>
            </thead>
            <tbody>
              <ListEmployee v-for="employee in employees" :key="employee._id" :employee="employee" @showCard="showCard" />
            </tbody>
          </table>
          <Loading :active.sync="isLoadingDashboard" color="red" name="spinner"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay'
import { mapState, mapMutations } from 'vuex'
import ListEmployee from '@/components/ListEmployee.vue'
import 'vue-loading-overlay/dist/vue-loading.css';
import EmployeeCard from '@/components/EmployeeCard.vue'

export default {
  data() {
    return {
      isLoading : false,
      onShowCard : ''
    }
  },
  components : {
    ListEmployee,
    Loading,
    EmployeeCard
  },
  computed : {
    ...mapState(['employees', 'isLoadingDashboard'])
  },
  methods : {
    showCard(payload) {
      this.onShowCard = payload
    }
  }
}
</script>

<style scoped>
p {
  margin: 0;
  text-align: left;
  font-size: 14px
}

.avatar {
  border-radius: 50%
}

.table td {
  vertical-align: middle !important;
  padding: 8px
}

.table th {
  padding: 8px;
  border-color: #FFF
}

.table thead th {
  vertical-align: middle
}
</style>