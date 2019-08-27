<template>
  <div class="dashboard" style="background-color: ">
    <div style="height: 100px;">&nbsp;</div>
    <div style="padding-left: 200px; padding-right: 200px">
      <div class="text-center mb-3 mt-5">
        <!-- <h3>NFCard's Employee List</h3> -->
      </div>
      <input type="file" ref="file" style="display: none;"  @change="uploadExcel">
      <p id="excel-btn" @click="triggerFile">Add With Excel</p>
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
                    <th scope="col"><p style="color: #989EA1; font-size: 12px">OPTIONS</p></th>
                    <th scope="col">
                      <div class="d-flex align-items-center justify-content-center" style="background-color: #fff; border-radius: 50%; border: 1px solid #D6D8DA; height: 25px; width: 25px; cursor: pointer;" data-toggle="modal" data-target="#ModalCreate">
                        <div style="font-size: 12px"><i class="fas fa-plus" style="color: #979EA1"></i></div>
                      </div>
                      <ModalCreate  />
                    </th>
                </tr>
            </thead>
            <tbody>
              <ListEmployee v-for="(employee) in employees" :key="employee._id" :employee="employee" @showCard="showCard" @openEdit="openEdit" />
              <!-- <ModalEdit :employee="employee" /> -->
            </tbody>
          </table>
          <Loading :active.sync="isLoadingDashboard" color="red" name="spinner"/>
          <ModalEdit  :employee="editEmployee"   />
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
import EmployeeCard from '@/components/EmployeeCard.vue';
import ModalCreate from '../components/ModalCreate';
import ModalEdit from '@/components/ModalEdit.vue'

export default {
  data() {
    return {
      isLoading : false,
      onShowCard : '',
      newEmployee: {
        name: '',
        position: '',
        phone: '',
        email: ''
      },
      editEmployee : ''
    }
  },
  components : {
    ListEmployee,
    Loading,
    EmployeeCard,
    ModalCreate,
    ModalEdit
  },
  computed : {
    ...mapState(['employees', 'isLoadingDashboard'])
  },
  methods : {
    showCard(payload) {
      this.onShowCard = payload
    },
    openEdit(payload) {
      this.editEmployee = payload
    },
    triggerFile() {
      this.$refs.file.click()
    },
    uploadExcel(e) {
      const file = e.target.files[0]
      this.$store.dispatch('uploadExcel', file)
      .then(({data}) => {
        console.log(data)
        this.$toasted.success('Excel uploaded', {duration : 1500})
        this.$store.dispatch('getEmployees')
      })
      .catch(console.log)
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

#excel-btn {
  font-size: 22px;
  margin: 1em auto;
  background-color: #374E87;
  width: 30vh;
  text-align: center;
  border-radius: 5px;
  color: white;
}

#excel-btn:hover {
  cursor: pointer;
  background-color: rgba(55, 78, 135, 0.418);
}
</style>