import Vue from 'vue'
import Vuex from 'vuex'
import { axCp, axEmp } from './axios'
import Toast from 'vue-toasted'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: !!localStorage.getItem('token'),
    loggedCompany : {},
    employees : [],
    selectedEmployees : [],
    isLoadingDashboard : false
  },
  mutations: { 
    storeLogin(state, {token, company}) {
      state.loggedCompany = company
      localStorage.setItem('token', token)
      state.isLogin = true
    },
    storeEmployees(state, payload) {
      state.employees = payload
    },
    selectEmployee(state, payload) {
      state.selectedEmployees.push(payload)
    },
    logout(state, payload) {
      state.employees = []
      localStorage.clear()
      state.isLogin = false
    }
  },
  actions: {
    loginRegister( {state, commit}, {type, data}) {
      return axCp({
        method: 'POST',
        url: `/${type}`,
        data
       })
    },
    uploadExcel({state, commit}, payload) {
      const formData = new FormData()
      formData.append('file', payload)
      return axCp({
        method: 'POST',
        url: `/`,
        headers : {
          token : localStorage.getItem('token'),
          'Content-Type' : 'form-data'
        },
        data : formData
      })
    },
    singlePost({state, commit}, {data}) {
      return axEmp({
        method: 'POST',
        url: '/single',
        headers : {
          token : localStorage.singlePost('token')
        },
        data
      })
    },
    async deleteEmployee({state, commit}, payload) {
      const { chosenEmployees } = state
      const temp = []
      chosenEmployees.forEach(emp => {
        temp.push(axEmp({
          method: 'DELETE',
          url : '/'+payload,
          headers : {
            token : localStorage.getItem('token')
          }  
        }))
      })
      try {
        await Promise.all(temp)
      } catch (error) {
        console.log(error)
      }
    },
    updateEmployee({state, commit}, {id, data}) {
      return axEmp({
        method: 'PUT',
        url: '/'+id,
        headers : {
          token: localStorage.getItem('token')
        },
        data
      })
    },
    getEmployees({state, commit}) {
      state.isLoadingDashboard = true
      axEmp({
        url : `/forCompany`,
        method : 'GET',
        headers : {
          token : localStorage.getItem('token')
        }
      })
      .then(({data}) => {
        state.isLoadingDashboard = false
        console.log('employee fetched')
        commit('storeEmployees', data)
      })
      .catch(err => console.log(err.response.data.errors))
    }
  }
})
/*
/forCompany get
/ post
/single post
/:employeeId delete
/:employeeId put
*/
