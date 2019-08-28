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
      localStorage.setItem('company', JSON.stringify(company))
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
      state.loggedCompany = {}
      localStorage.clear()
      state.isLogin = false
    },
    storeLoggedCompany(state) {
      state.loggedCompany = JSON.parse(localStorage.getItem('company'))
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
      return axEmp({
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
    deleteEmployee({state, commit}, payload) {
      return axEmp({
        method: 'DELETE',
        url : '/'+payload,
        headers : {
          token : localStorage.getItem('token')
        }  
      })
    },
    updateCreate({state, commit}, {id, data, type}) {
      return axEmp({
        method: type,
        url: type == 'POST' ? '/single' : '/'+id,
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
    },
    updateCompany({state, commit}, { data }) {
      return axCp({
        url: `/`,
        method: 'PUT',
        headers: {
          token: localStorage.getItem('token')
        },
        data 
      })
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
